function BHS(){
  let school = {
    "name":"Bayside High School",
    "image":"https://imagescdn.homes.com/i2/DR3rh3ZAFGmxdce_vrcZB-VfI1qR7cPIq11ixKmzhCY/117/bayside-high-school-bayside-ny-2-schoolphoto.jpg",
    "address": "32-24 Corporal Kennedy Street, Bayside NY 11361",
  }
  let output = document.getElementById("output");
  //Challenge 1: Create and display a card of the information contained in the JSON variable school
let build = `
    <div class="card">
          <h2> ${ school.name } </h2>
          <img src="${school.image}">
          <p>${school.address}</p>
    </div>
    `

output.innerHTML = build;
}
function artist(){
  //Challenge 2: Fill the JSON below with the specified information
  let artist = {
    "name":"wave to earth",
    "image":"https://preview.redd.it/wave-to-earth-1st-studio-album-0-1-flaws-and-all-profile-v0-5l1pabxa6qta1.png?width=1350&format=png&auto=webp&s=575923b25411cd2057974bb35aa00629e742a1cc",
    "album":"https://i.pinimg.com/736x/c2/c6/1a/c2c61a400c11f034b3b0a5cbc752d6da.jpg",
    "url":"https://open.spotify.com/artist/5069JTmv5ZDyPeZaCCXiCg"
  }
  let output = document.getElementById("output");
  //Challenge 3: Build a card for the information in the JSON.  Make the image a hyperlink to the url provided.
let build = `
    <div>
          <h2> ${ artist.name } </h2>
          <img src = ${ artist.album }>
          <a href= "${ artist.url }" >
            <img src="${ artist.image }">
          </a>
</div>
`

output.innerHTML = build;

}


