
    const projects = [
        {
            id: 0,
            title: "Art Knowledge Graph",
            description: "Construction of an art Knowledge Graph and Clustering",
            team: "Three students",
            duration: "Seminar of one semester",
            time: "3. semester, Beginning of 2021",
            technologies: [
                "Python",
                "Neo4j DB",
                "Cypher queries"
            ],
            image: "KG/kg_thumbnail.jpg",
            about: [
                "The main goal of this project was to automatically create and explore a knowledge graph that was built on art data resources.",
                "The resources consisted of picture scanned old art books, exhibition catalogues and auction manuals, mostly about Pablo Picasso. Challenges that came with the data are: unstructured free form texts, noisy OCRed text, incomplete sentences and a lot of spelling and formatting errors. An accurate named entity matching was strongly required because some entities meant the same e.g. Pablo Ruiz, Pablo Ruys Picasso, Pablo Ruiz Picasso, P.-R. Picasso or just Picasso.",
                <br/>,
                "Knowledge Graphs are perfect for automated analysis, relation and entity exploration and further information retrieval. Before constructing the knowledge graph, several preprocessing steps had to be done. These preprocessing steps included co-reference resolution by the help of neuralcoref and spaCy, named entity recognition (NER), ontology mapping with DBpedia, relation extraction and serialization as output triples. The output triples represent the knowledge graph and can be visualized with another tool, here Neo4j was used.",
                <br/>,
                "The seminar leader provided some example queries to verify and evaluate our knowledge graph. We showed that our knowledge graph was able to answer following questions: Where was Picasso born? Who is the painter of Jacqueline? What is the location of the Picasso museum?",
                <br/>,
                "The following pictures show the progress and result of the project."
            ],
            hasGallery: true,
            mockup: "",
            myWork: [
                "Everybody contributed equally."
            ],
            path: "",
            docu: ""
        },
        {
            id: 1,
            title: "Natural Language Processing on LoL",
            description: "Understand the game League of Legends and the corresponding universe. Discover dependencies and relations to help beginners understanding the extensive game.",
            team: "Two students",
            duration: "Seminar of one semester",
            time: "3. semester, Beginning of 2021",
            technologies: [
                "Python",
                "NLP tools",
                "Jupyter notebook"
            ],
            image: "NLP_LoL/nlp_wordcloud.jpg",
            about: [
                "Three points that we implemented in this project:",
                <ul>
                    <li>the <b> dependencies</b> between Champions and their properties e.g. their assigned spells (every champ has five spells), their position in the game, their classes, damagetype, toughness, control and many more,</li>
                    <li>a <b>sentiment analysis</b> about the champion history/biography and</li>
                    <li><b>summarization</b> task of champion histories.</li>
                </ul>,
            ],
            hasGallery: false,
            mockup: "",
            myWork: [
                "Everybody contributed equally."
            ],
            path: "",
            docu: ""
        }
    ]

    export default projects;