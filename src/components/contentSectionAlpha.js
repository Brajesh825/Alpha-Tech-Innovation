function ContentAlpha(chooseUsData) {
    const contentAlpha = document.createElement('section');
    contentAlpha.classList.add('content-alpha');

    // Create title, subtitle, and motto elements
    const title = document.createElement('h2');
    title.textContent = chooseUsData.title;

    const subtitle = document.createElement('h3');
    subtitle.textContent = chooseUsData.subtitle;

    const motto = document.createElement('p');
    motto.textContent = chooseUsData.motto;

    // Create image element
    const image = document.createElement('img');
    image.src = chooseUsData.image;
    image.alt = chooseUsData.title;

    // Create notes container
    const notesContainer = document.createElement('div');
    notesContainer.classList.add('notes');

    // Iterate through notes data and create note elements
    chooseUsData.notes.forEach(note => {
        const noteDiv = document.createElement('div');
        noteDiv.classList.add('note');

        const heading = document.createElement('h4');
        heading.textContent = note.heading;

        const content = document.createElement('p');
        content.textContent = note.content;

        noteDiv.appendChild(heading);
        noteDiv.appendChild(content);

        notesContainer.appendChild(noteDiv);
    });

    const main = document.createElement('section');
    main.classList.add('content-alpha-main')
    
    // Append elements to contentAlpha
    main.appendChild(title);
    main.appendChild(subtitle);
    main.appendChild(motto);
    main.appendChild(image);
    contentAlpha.appendChild(main);
    contentAlpha.appendChild(notesContainer);


    return contentAlpha;
}

export default ContentAlpha;
