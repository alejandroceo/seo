document.getElementById('generate').addEventListener('click', function() {
    const title = document.getElementById('title').value || 'Título de la Página';
    const url = document.getElementById('url').value || 'www.ejemplo.com';
    const description = document.getElementById('description').value || 'Descripción breve de la página que aparecerá en los resultados.';

    document.getElementById('preview-title').innerText = title;
    document.getElementById('preview-url').innerText = url;
    document.getElementById('preview-description').innerText = description;
    
    document.getElementById('preview-title').setAttribute('href', url);
});
