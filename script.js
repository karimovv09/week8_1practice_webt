window.onload = function () {
    const paragraph = document.getElementById('text');
    let text = paragraph.innerHTML;

    const words = text.split(' ');
    const highlightedWords = words.map(word => {
        return word.length > 8 ? `<span class="highlight">${word}</span>` : word;
    });
    paragraph.innerHTML = highlightedWords.join(' ');

    const link = document.createElement('a');
    link.href = "https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-job-interview-questions-and-how-great-job-candidates-answer-them.html";
    link.innerText = "Source of the text";
    document.body.appendChild(link);

    text = paragraph.innerHTML;
    paragraph.innerHTML = text.replace(/\.\s*/g, '.<br><br>');

    const wordCount = words.length;
    const wordCountDiv = document.getElementById('word-count');
    wordCountDiv.innerHTML = `Word count: ${wordCount}`;

    paragraph.innerHTML = paragraph.innerHTML
        .replace(/\?/g, '�')
        .replace(/!/g, '�');
};
