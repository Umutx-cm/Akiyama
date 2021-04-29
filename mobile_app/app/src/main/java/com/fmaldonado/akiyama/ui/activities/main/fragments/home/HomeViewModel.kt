package com.fmaldonado.akiyama.ui.activities.main.fragments.home

import android.util.Log
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.fmaldonado.akiyama.data.repositories.anime.AnimeRepository
import com.fmaldonado.akiyama.ui.common.Status
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import java.lang.Exception
import javax.inject.Inject

@HiltViewModel
class HomeViewModel
@Inject
constructor(
    private val animeRepository: AnimeRepository
) : ViewModel() {
    val latestEpisodesStatus = MutableLiveData(Status.Loading)
    val latestAnimesStatus = MutableLiveData(Status.Loading)
    val latestMoviesStatus = MutableLiveData(Status.Loading)
    val latestSpecialsStatus = MutableLiveData(Status.Loading)
    val latestOvasStatus = MutableLiveData(Status.Loading)


    val latestEpisodes = animeRepository.latestEpisodes
    val latestAnimes = animeRepository.latestAnimes
    val latestMovies = animeRepository.latestMovies
    val latestOvas = animeRepository.latestOvas
    val latestSpecials = animeRepository.latestSpecials

    fun getLatestEpisodes() {
        latestEpisodesStatus.postValue(Status.Loading)
        viewModelScope.launch(Dispatchers.IO) {
            try {
                animeRepository.getLatestEpisodes()
                latestEpisodesStatus.postValue(Status.Loaded)
            } catch (e: Exception) {
                Log.e("Error", "Error", e)
            }
        }
    }

    fun getLatestAnimes() {
        latestAnimesStatus.postValue(Status.Loading)
        viewModelScope.launch(Dispatchers.IO) {
            try {
                animeRepository.getLatestAnimes()
                latestAnimesStatus.postValue(Status.Loaded)
            } catch (e: Exception) {
                Log.e("Error", "Error", e)
            }
        }
    }

    fun getLatestMovies() {
        latestMoviesStatus.postValue(Status.Loading)
        viewModelScope.launch(Dispatchers.IO) {
            try {
                animeRepository.getLatestMovies()
                latestMoviesStatus.postValue(Status.Loaded)
            } catch (e: Exception) {
                Log.e("Error", "Error", e)
            }
        }
    }

    fun getLatestOvas() {
        latestOvasStatus.postValue(Status.Loading)
        viewModelScope.launch(Dispatchers.IO) {
            try {
                animeRepository.getLatestOvas()
                latestOvasStatus.postValue(Status.Loaded)
            } catch (e: Exception) {
                Log.e("Error", "Error", e)
            }
        }
    }

    fun getLatestSpecials() {
        latestSpecialsStatus.postValue(Status.Loading)
        viewModelScope.launch(Dispatchers.IO) {
            try {
                animeRepository.getLatestSpecials()
                latestSpecialsStatus.postValue(Status.Loaded)
            } catch (e: Exception) {
                Log.e("Error", "Error", e)
            }
        }
    }

}