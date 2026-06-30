function carregarPosts(btn) {
    const tbody = document.getElementById('tbody');
    const url = 'https://jsonplaceholder.typicode.com/posts';

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na rede: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            tbody.innerHTML = '';
            data.forEach(post => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${post.userId}</td>
                    <td>${post.id}</td>
                    <td>${post.title}</td>
                    <td>${post.body}</td>
                `;
                tbody.appendChild(tr);
            });
        })
        .catch(error => {
            console.error('Erro ao carregar dados:', error);
            alert('Falha ao carregar os dados. Verifique o console.');
        });

}
