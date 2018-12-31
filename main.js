if (window.location.toString().includes("oursky.com")) {
    let technologies = $(".tech");
    let newTechnology = `<a href="https://flutter.io/" target="_blank"><img src="https://flutter.io/assets/flutter-lockup-4cb0ee072ab312e59784d9fbf4fb7ad42688a7fdaea1270ccf6bbf4f34b7e03f.svg"></a>`;
    technologies.append(newTechnology);
}

if (window.location.toString().includes('http://www.intervaltimer.com/timers/')) {
    $('.navbar').remove();
    $('.feature').remove();
    $('.navbar').remove();
    $('.navbar').remove();
    $('.footer').remove();
    $('.col-md-4').remove();
}
