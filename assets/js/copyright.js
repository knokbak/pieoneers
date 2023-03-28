(() => {
    fetch('https://raw.githubusercontent.com/knokbak/pieoneers/main/LICENSE', {
        method: 'GET',
        headers: {
            'Accept': 'text/plain'
        },
    }).then(async (res) => {
        console.info(await res.text());
    }).catch((err) => {
        console.warn(err);
    });
})();
