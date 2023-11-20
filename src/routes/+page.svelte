<script>
/*
https://docs.google.com/forms/d/e/1FAIpQLSd814VAVDcyLCmPhAnxnaV7zEK-C7_HfSrtyha4FulQt-tvsg/viewform?usp=pp_url
&entry.2005620554=test
&entry.1442067619=test1
&entry.2024126210=test2
&entry.965650928=test3+e+test3.4
*/

let name = "";
let school = "";
let email = "";
let comment = "";

function submit_contact() {
    let link = "https://docs.google.com/forms/d/e/1FAIpQLSd814VAVDcyLCmPhAnxnaV7zEK-C7_HfSrtyha4FulQt-tvsg/formResponse?usp=pp_url\
        &entry.2005620554="+name+"&entry.1442067619="+school+"&entry.2024126210="+email+"&entry.965650928="+comment;
    fetch(encodeURI(link));
}

</script>

<div id="f">
    Foto de capa
</div>

<div id="s">
    <h3>Sobre mim</h3>
    <h3>Experiência</h3>
    <h3>Testemónios</h3>
</div>

<div id="t">
    <h2>Contactar</h2>
    <input placeholder="Nome" type="text" bind:value={name}>
    <input placeholder="Escola, 10º ano" type="text" bind:value={school}>
    <input placeholder="Email (ou telemóvel)" type="text" bind:value={email}>
    <input placeholder="Comentário" type="text" bind:value={comment}>
    <button on:click={submit_contact}>Submeter</button>
</div>


<style>

#f {
    width: 100%;
    height: 45%;
    background-color: aqua;
    display: flex;
    align-items: center;
    justify-content: center;
}

#s {
    background-color: white;
    width: 100%;
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

#t {
    background-color: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}


</style>