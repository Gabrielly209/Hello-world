function mostrarDisciplinas(semestre) {
    const listaSemestres = document.querySelector('ul:not(#disciplinas)');
  
     const listaDisciplinas = document.getElementById('disciplinas');
  
   if (listaSemestres && listaDisciplinas) {
      listaSemestres.style.display = 'none';
  
     listaDisciplinas.style.display = 'block'; 
    }
  
   console.log(`Você clicou em: ${semestre}`);
  }
  
  function toggleInfo(id) {
    const info = document.getElementById(id);
    const isVisible = info.style.display === 'block';


    document.querySelectorAll('.info').forEach(p => p.style.display = 'none');

    if (!isVisible) {
        info.style.display = 'block';
    }
}