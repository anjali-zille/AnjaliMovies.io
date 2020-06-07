<template>
  <div>
    <div>

    <nav class="navbar navbar-light" style="background-color: #e3f2fd; ">
  <a class="navbar-brand"><h4>Ecstacy</h4></a>
  
  <form class="form-inline"  v-on:submit.prevent="addMovie">
    <input class="form-control mr-sm-2" type="search" placeholder="Movie Name" aria-label="Movie Name"  v-model="title">

    <input class="form-control mr-sm-2" type="search" placeholder="Image Url" aria-label="Image Url"  v-model="poster">
    <button class="btn btn-outline-success my-2 my-sm-0"  type="submit">Add Movie</button>
  </form>
</nav>

 <div class="header">
    <div class="text">
<h2>Your Favourite Movie Explained !</h2>
    </div>
    <div>
    <input class=" form-control mr-sm-2 input" type="text" placeholder="Search Movie" aria-label="Search Movie"  v-model="searchKey">
    <button  class="btn btn-outline-success my-2 my-sm-0" v-on:click="searchMovies">Search</button>
     </div>
     </div>
     </div>
     <br>
     
     <div v-if=error> <button class="btn btn-outline-danger" my-2 my-sm-0 >{{error}}</button>
     </div>
            <div  v-for="item in movieList" class="movieList" v-bind:key="item.imdbID">
            <div class="card">
             <img  v-bind:src="item.Poster" >
              <h5>{{item.Title}}</h5>
              <button class="btn btn-outline-success my-2 my-sm-0" @click="singleMovie(item.imdbID)">View Details</button>
            </div>
         
        </div>
    </div>
     
</template>

<script>

 import axios from 'axios'
export default {
  
  name: 'search',
  data () {
    return {
      
      msg: 'search',
      searchKey:'',
      title:'',
      poster:'',
      error:'',
      movieList:[]

    }
  },
  methods:{
    searchMovies() 

    {  
 
    axios
      .get('https://www.omdbapi.com/?apikey=f2d99df4&s='+this.searchKey)
      .then(response=> {
        
        this.error=''
        if(response.data.Error){
          this.error=response.data.Error
        }
      this.movieList = response.data.Search;
      this.searchKey='';

      
      })
      .catch(error => {
       this.error=error
      })
  },

addMovie(){
    this.movieList.push({
      Title:this.title,
      Poster:this.poster
    })
    this.title='',
    this.poster='',
    alert("Movie added succesfully at the end");
   },
    singleMovie(id){
      this.$router.push('/movie/' + id )
    }
    }
    }
</script>

<style >

.header
{
    height: 450px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5),rgba(5, 189, 221, 0.5)),url(../assets/anj.jpeg);
    background-size: cover;
    background-position:center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
    margin-top: 0px; 
    flex-direction:column;
    margin-top:5px;
       
}
.text{
  
    color:white;
   font-style: oblique;
}
.header img{
  
  max-width: 100%;
  max-height: 100%;
}
.navbar {
  min-height: 80px;
}
.header input{
  box-sizing: border-box;
  width:300px;
  padding: 7px;
  padding-left:20px;
   margin:10px 0;
   border-radius: 25px;
   border:1.5px solid rgba(20,201,4,0.781);
   margin-right:5px;
  
}
.card{
  box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);
  padding:16px;
  text-align:center;
  align-items:center;
  background-color:#f1f1f1;
  background-image: linear-gradient(rgba(192,243,239),rgb(240,244,245));
}
.movieList
{
  width:20rem;
  text-align:center;
  display:inline-block;
  margin:20px;
}
.card img{
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  margin-bottom:10px;
  border-radius:5px;
  width:300px;
  height:300px;
}
.single img{
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 20%;
  height: 300px;
}
.name{
  text-align: left;
}
</style>







