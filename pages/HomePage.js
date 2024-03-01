class HomePage {
    constructor(page) {
        this.page = page;
        this.homeText = page.getByRole('heading', { name: 'Home' })
        this.tweetButton = page.getByRole('button', { name: 'Tweet' });
    }
}

module.exports = HomePage;