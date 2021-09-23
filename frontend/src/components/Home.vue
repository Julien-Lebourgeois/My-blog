<template>
    <div id="home">
        <div id="banniere">
            <h1>Fil d'actualité</h1>
        </div>
        <router-link to="/formpage"><i class="far fa-plus-square"></i></router-link>
        <div id="card" v-for="article in articles" :key="article.id">
            <div id="titre">
                <h3>{{article.titre}}</h3>
                <button id="buttontitre" @click="deleteArticle(key)">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
            <img :src="article.image" :alt="article.name">
            <p id="contenu">{{article.contenu}}</p>
            <p id="auteur">by {{article.auteur}} le {{ formatDate(article.createdAt) }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Home',
    data() {
        return {
            articles: []
        }
    },

    methods: {
        getAllArticles: function() {
            axios.get('http://localhost:3001/api/article/articles')
            .then(response => {
                this.articles = response.data.articles;
            })
            .catch(error => {
                console.log(error);
            })
        },

        deleteArticle: function() {
            const idArticle = this.articles[0].id;
            axios.delete(`http://localhost:3001/api/article/${idArticle}`)
            .then(() => {
                location.reload()
            })
            .catch(error => {
                console.log(error);
            })
        },

        formatDate(dateString) {
            let convertedDate = new Date(dateString);
            return convertedDate.toLocaleDateString();
        },
    },

    mounted() {
        this.getAllArticles();
    }
}
</script>


<style>
#home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#banniere {
    display: flex;
    justify-content: center;
    align-items: center;
}

.fa-plus-square {
    margin-left: 100px;
    font-size: 40px;
}

#card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50rem;
    margin-top: 5%;
    margin-left: 10%;
    margin-right: 10%;
    padding: 1% 0%;
    box-shadow: 10px 10px 50px black;
    border-radius: 2rem;
    background-color: whitesmoke;
}

#titre {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
}

img {
    width: 90%;
    height: auto;
    border-radius: 25px;
}

#buttontitre {
    margin: 0px;
    width: 30px;
    height: 30px;
    box-shadow: none;
    background-color: silver;
    cursor: pointer;
    border-radius: 10px;
    border: none;
}
</style>