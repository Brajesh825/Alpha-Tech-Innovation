function FaqAlpha(faqData) {
    const faqContainer = document.createElement('div');
    faqContainer.classList.add('faq-container-alpha');

    // FAQ Title
    const title = document.createElement('h2');
    title.textContent = faqData.title;
    faqContainer.appendChild(title);

    // FAQ Subtitle
    const subtitle = document.createElement('h3');
    subtitle.textContent = faqData.subtitle;
    faqContainer.appendChild(subtitle);

    // FAQ Items
    faqData.contents.forEach((questionData, index) => {
        const faqItem = document.createElement('div');
        faqItem.classList.add('faq-item');

        // FAQ Question
        const question = document.createElement('h4');
        question.textContent = questionData.question;
        question.addEventListener('click', () => {
            faqItem.classList.toggle('show');
        });
        faqItem.appendChild(question);

        // FAQ Answer
        const answer = document.createElement('p');
        answer.classList.add('answer');
        answer.textContent = questionData.answer;
        faqItem.appendChild(answer);

        faqContainer.appendChild(faqItem);
    });

    return faqContainer;
}

export default FaqAlpha;
