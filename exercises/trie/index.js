class Node {
    constructor() {
        this.letters = {};
        this.end = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    add(word, node = this.root) {
        if (word.length === 0) {
            node.end = true;
            return;
        }

        const firstLetter = word[0];

        if (!node.letters[firstLetter])
            node.letters[firstLetter] = new Node();

        return this.add(word.substr(1), node.letters[firstLetter])
    }

    isWord(word) {
        let node = this.root;

        while (word.length > 1) {
            const firstLetter = word[0];

            if (!node.letters[firstLetter])
                return false;

            node = node.letters[firstLetter];
            word = word.substr(1);
        }

        return !!(node.letters[word] && node.letters[word].end);
    }
}

let trie = new Trie();
trie.add("ball");
trie.add("bat");
trie.add("doll");
trie.add("dork");
trie.add("do");
trie.add("dorm");
trie.add("send");
trie.add("sense");
console.log(trie.isWord("doll"));
console.log(trie.isWord("dor"));
console.log(trie.isWord("dorf"));
console.log(trie.isWord("send"));
console.log(trie.isWord("sender"));
console.log(trie.isWord("s"));
