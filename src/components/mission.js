function Mission(missionContent) {
    const { missionTitle, missionDescription, missionButtonText } = missionContent;

    const missionSection = document.createElement('section');
    missionSection.classList.add('mission');

    const missionContentDiv = document.createElement('div');
    missionContentDiv.classList.add('mission-content');

    const missionTextContainer = document.createElement('div');
    missionTextContainer.classList.add('text-container');

    const title = document.createElement('h2');
    title.textContent = missionTitle;

    const description = document.createElement('p');
    description.textContent = missionDescription;

    const missionButton = document.createElement('button');
    missionButton.textContent = missionButtonText;

    missionTextContainer.appendChild(title);
    missionTextContainer.appendChild(description);
    missionTextContainer.appendChild(missionButton);

    missionContentDiv.appendChild(missionTextContainer);

    missionSection.appendChild(missionContentDiv);

    return missionSection;
}

export default Mission;
