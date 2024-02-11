$(document).ready(function() {
    // the whole data in JSON
    var data = {
        "services": [
            {
                "id": 1,
                "head": null,
                "name": "Проф.осмотр",
                "node": 0,
                "price": 100.0,
                "sorthead": 20
            },
            {
                "id": 2,
                "head": null,
                "name": "Хирургия",
                "node": 1,
                "price": 0.0,
                "sorthead": 10
            },
            {
                "id": 3,
                "head": 2,
                "name": "Удаление зубов",
                "node": 1,
                "price": 0.0,
                "sorthead": 10
            },
            {
                "id": 4,
                "head": 3,
                "name": "Удаление зуба",
                "node": 0,
                "price": 800.0,
                "sorthead": 10
            },
            {
                "id": 5,
                "head": 3,
                "name": "Удаление 8ого зуба",
                "node": 0,
                "price": 1000.0,
                "sorthead": 30
            },
            {
                "id": 6,
                "head": 3,
                "name": "Удаление осколка зуба",
                "node": 0,
                "price": 2000.0,
                "sorthead": 20
            },
            {
                "id": 7,
                "head": 2,
                "name": "Хирургические вмешательство",
                "node": 0,
                "price": 200.0,
                "sorthead": 10
            },
            {
                "id": 8,
                "head": 2,
                "name": "Имплантация зубов",
                "node": 1,
                "price": 0.0,
                "sorthead": 20
            },
            {
                "id": 9,
                "head": 8,
                "name": "Коронка",
                "node": 0,
                "price": 3000.0,
                "sorthead": 10
            },
            {
                "id": 10,
                "head": 8,
                "name": "Слепок челюсти",
                "node": 0,
                "price": 500.0,
                "sorthead": 20
            }
        ]
    };

    // function that builds a tree
    function buildTree(services, parentId = null) {
        // tree's html element start
        let treeHtml = '<ul>';
        
        // add all the child elements to the parent of parentId
        services.forEach(function(service) {
            // current servise refers to current parentId
            if (service.head === parentId) {
                // add list element to the tree 
                treeHtml += `<li>${service.name} (${service.price})`;
                if (service.node === 1) { // an element is a tree itself
                    // recursively build a tree under a previous one  
                    treeHtml += buildTree(services, service.id); // create a new tree under previous
                }
                // tree elemnent's end
                treeHtml += '</li>';
            }
        });

        // tree's html element end
        treeHtml += '</ul>';
        // return readymade tree 
        return treeHtml;
    }

    // create a parent tree that's index is null
    var tree = buildTree(data.services);
    // add a tree to the html el ement
    $('#tree').append(tree);
});