<template>
<div class ="container">
	<h2>InSight</h2>
	<hr>
	<div class="single">
       <img v-bind:src="singleMovie.Poster" >
    </div>
    <hr>
    <div class="name">

    <h3>{{singleMovie.Title}} - {{singleMovie.Year}}</h3>
  <p>{{singleMovie.Plot}}</p>
    
  <h6><b>Actors:</b></h6>{{singleMovie.Actors}}
  <h6><b>Awards:</b></h6> {{singleMovie.Awards}}
  <h6><b>Genre:</b></h6>{{singleMovie.Genre}}
  <h6><b>Imdb Rating:</b></h6>{{singleMovie.imdbRating}}
    <h6><b>Runtime:</b></h6>{{singleMovie.Runtime}}
    <h6><b>Language:</b></h6>{{singleMovie.Language}}
</div>
<button class="button"  @click="back"  style="">Back</button>
</div>
</template>
          
  
<script>
import axios from 'axios'
export default {
  props: ['id'],
  data () {
    return {
      singleMovie: ''
    }
  },

  mounted () {
    axios
      .get('https://www.omdbapi.com/?apikey=f2d99df4&i='+this.id)
      .then(response => {
        this.singleMovie = response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods:{
  	back(){
  		this.$router.push('/')
  	}
  }
}
</script>
<style>

.single img{

  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  height: 400px;
  border:3px solid skyblue;
  margin-bottom:10px;

}
.name{
  text-align: left;
}
.container{
  margin-top:20px;
  border:2px solid skyblue;
  margin-bottom:20px;
  padding:20px 20px 20px 20px;
}
.button{
background-color: #4CAF50;
  border: none;
  color: white;
  padding: 5px 22px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
   border-radius: 4px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
}

</style>