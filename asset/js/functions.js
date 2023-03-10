// Text slider list of texts
const text_list = [
    "Do you feel the Bible is too big and complicated?",
    "So many characters and stories, especially in the Old Testament!",
    "The truth is that many Catholics long to read the Bible, but they don't know how. So they often start and quit.",
    "What if we told you that there is a 'once and for all' solution to this problem?",
    "The Bible Timeline System, developed by Jeff Cavins, is the fastest-growing Catholic Bible Study in the world. ...and for a reason",
    "Because this course uses a phenomenal approach which actually works!",
    "It divides the whole Bible into 12 colour-coded Periods, easy to understand and memorise",
    "In our course, Mauro will walk you through each of the 12 Periods",
    "This way, you will clearly see how the many characters and events in Scripture are related to each other in one unified narrative, from Adam & Eve to Jesus Christ",
    "You will grasp the Big Picture of the Bible from start to finish, the Old and New Testament, ...for life!",
    "You will understand the Bible and you will enjoy reading it!",
    "As a result, your faith will grow, your prayer life will improve, you will be hungry for more!",
    "Join us online! Come & See!"
];

// Text slider load next text
const loadNextText = function (element_id) {
    const text = document.getElementById(element_id).innerText;
    const text_index = text_list.indexOf(text);
    const text_list_length = text_list.length;
    const next_text = text_list[(text_index + 1) % text_list_length];
    document.getElementById(element_id).innerText = next_text;
}

// Text slider load prev text
const loadPrevText = function (element_id) {
    const text = document.getElementById(element_id).innerText;
    const text_index = text_list.indexOf(text);
    const text_list_length = text_list.length;
    const prev_text = text_list[(text_index + text_list_length - 1) % text_list_length];
    document.getElementById(element_id).innerText = prev_text;
}
