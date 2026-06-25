const btnAdd = document.getElementById('btnAdd');
const tbody = document.getElementById('tbody');

btnAdd.addEventListener('click', () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na rede: ' + response.status);
            }
            return response.json(); // Converte resposta para JSON
        })
        .then(data => {
            // 4. Limpar tabela existente para não duplicar dados se clicar 2x
            tbody.innerHTML = '';

            // 5. Iterar sobre os dados e criar as linhas
            data.forEach(post => {
                const tr = document.createElement('tr');

                // Mapeando corretamente: userId, id, title e body
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
});