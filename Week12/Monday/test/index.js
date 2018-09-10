
//Step 1

/*
    <main>
        <h1>Albums</h1>

        <ul class="album-list">
            <li>Music coming soon!</li>
        </ul>
        <footer>Copyright 2018</footer>
    </main>

*/
//let h1 = document.createElement('h1');

//h1.textContent = 'Albums';


// let h1 = React.createElement('h1', null, 'Albums');
// let li = React.createElement('li', null, "Music coming soon!");
// let ul = React.createElement('ul', {className: "album-list"}, li);
// let footer = React.createElement('footer', null, 'Copyright 2018');

// let main = React.createElement('main', null, [
//     h1,
//     ul,
//     footer
// ]);

// //step 2

// //ReactDOM.render(h1, document.getElementById('root'));
// ReactDOM.render(main, document.getElementById('root'));


let albums = [
    {title: "Mixed Up", artist: "The Cure"},
    {title: "Lifetime", artist: "Maxwell"},
    {title: "Dime", artist: "Gondwana"}

];



let h1 = React.createElement('h1', null, 'Albums');

let lis = albums.map(album =>
    React.createElement('li', null, album.title + " by " + album.artist)
)
//let li = React.createElement('li', null, "Music coming soon!");
let ul = React.createElement('ul', {className: "album-list"}, lis);
let footer = React.createElement('footer', null, 'Copyright 2018');


let main = React.createElement('main', null, [
    h1,
    ul,
    footer
]);

//step 2

//ReactDOM.render(h1, document.getElementById('root'));
ReactDOM.render(main, document.getElementById('root'));






