<template>
<div id="wrapper">
    <form @submit.prevent="postArticle()">
        <h2>Exprime toi</h2>
        <label for="titre">Titre :</label>
        <input 
        v-model="form.titre"
        type="text" 
        name="titre" 
        id="titre">
        <label for="image">Ajouter une image :</label>
        <input 
        v-model="form.image"
        type="text" 
        name="image" 
        id="image">
        <label for="contenu">Contenu :</label>
        <input 
        v-model="form.contenu"
        type="text" 
        name="contenu" 
        id="contenu">
        <label for="auteur">Auteur :</label>
        <input 
        v-model="form.auteur"
        type="text" 
        name="auteur" 
        id="auteur">
        <button id="buttonpost" type="submit">Poster</button>
    </form>
</div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Formulaire',
    data() {
        return {
            form: {
                titre: '',
                contenu: '',
                auteur: '',
                image: '',
            }
        }
    },

    methods: {
        postArticle: function() {
            axios.post('http://localhost:3001/api/article/add', this.form)
            .then(() => {
                console.log('well posted');
                location.reload()
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
}
</script>

<style>
#wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: auto;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: 50%;
    height: fit-content;
    box-shadow: 10px 10px 30px black;
    border-radius: 2rem;
    background-color: whitesmoke;
}

input {
    padding: 5px;
    border: none;
    outline: none;
    border-radius: 2rem;
    margin-bottom: 10px; 
    box-shadow: 1px 1px 5px black;   
}

label {
    margin-bottom: 10px;
    font-weight: bold;
    text-decoration: underline;
}

#buttonpost {
    margin: 0px;
    height: 30px;
    box-shadow: none;
    background-color: silver;
    cursor: pointer;
    border-radius: 10px;
    border: none;
}
</style>