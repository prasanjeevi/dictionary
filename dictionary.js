$().ready(() => {
    // $get: url, callback(data)
    $.get('dictionary.yml', data => {
        // console.log(data);
        let dictionary = YAML.parse(data);
        // console.dir(dictionary);
        dictionary.sort(compare);
        // $each: array, callback(index, value)
        $.each(dictionary, (index, value) => {
            // console.log(index, value.term);
            // <p><dfn>term</dfn> definition comes here</p>
            $('#dictionary').append(`<p><dfn>${value.term}</dfn>${value.definition}</p>`)
        });
    });
});

function compare(a, b) {
   if (a.term < b.term) return -1;
   else if (a.term > b.term) return 1;
   else return 0;
}