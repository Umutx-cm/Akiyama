package com.fmaldonado.akiyama.ui.activities.main.fragments.home

import android.content.Intent
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.core.view.children
import androidx.fragment.app.commit
import androidx.fragment.app.viewModels
import com.fmaldonado.akiyama.R
import com.fmaldonado.akiyama.databinding.FragmentHomeBinding
import com.fmaldonado.akiyama.ui.activities.seacrhAnime.SearchAnimeActivity
import com.fmaldonado.akiyama.ui.fragments.latestAnime.LatestAnimeFragment
import dagger.hilt.android.AndroidEntryPoint

@AndroidEntryPoint
class HomeFragment : Fragment() {
    private lateinit var binding: FragmentHomeBinding
    private val viewModel: HomeViewModel by viewModels()

    private var sections: MutableList<LatestAnimeFragment> = mutableListOf()

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        binding = FragmentHomeBinding.inflate(layoutInflater)
        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        createSections()


        fetchData(false)

        binding.swipeToRefresh.setOnRefreshListener {
            fetchData(true)
            binding.swipeToRefresh.isRefreshing = false
        }

        viewModel.getLatestAnimeData().forEachIndexed { index, item ->
            item.observe(viewLifecycleOwner) {
                val section = sections[index]
                section.setContent(it)
            }
        }

        viewModel.getLatestAnimeStatus().forEachIndexed { index, item ->
            item.observe(viewLifecycleOwner) {
                val section = sections[index]
                section.setStatus(it)
            }
        }

        binding.searchBar.setOnClickListener {
            val intent = Intent(context, SearchAnimeActivity::class.java)
            startActivity(intent)
        }

    }

    private fun fetchData(forceFetch: Boolean) {
        LatestAnimeSections.values().forEach {
            viewModel.getAnimeSection(forceFetch, it)
        }
    }


    private fun createSections() {

        childFragmentManager.fragments.forEach {
            childFragmentManager.beginTransaction().remove(it).commit()
        }

        sections.clear()
        sections = LatestAnimeSections.values().map {
            createLatestAnimeFragment(it)

        }.toMutableList()
    }

    private fun createLatestAnimeFragment(
        section: LatestAnimeSections
    ): LatestAnimeFragment {
        val fragment = LatestAnimeFragment.newInstance(section.title, section.smallSection) {
            viewModel.getAnimeSection(true, section)
        }
        childFragmentManager.beginTransaction()
            .add(binding.latestAnimeContainer.id, fragment, section.title)
            .commit()



        return fragment
    }

}

enum class LatestAnimeSections(val title: String, val smallSection: Boolean = false) {
    LatestEpisodes("Latest Episodes", true),
    LatestAnime("Latest Anime"),
    LatestMovies("Latest Movies"),
    LatestOvas("Latest Ovas"),
    LatestSpecials("Latest Specials"),

}