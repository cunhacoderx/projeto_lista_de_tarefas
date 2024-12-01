$(document).ready(function () {
  // Captura o evento de submit do formulário
  $('#inputs-form').on('submit', function (e) {
    e.preventDefault(); // Evita o comportamento padrão do formulário

    const taskName = $('#task-name').val().trim(); // Obtém o valor do input

    if (taskName) { // Verifica se o input não está vazio
      // Verifica se a tabela já existe
      if ($('#task-table').length === 0) {
        // Cria a tabela se não existir
        const tabela = `
          <table id="task-table">
            <thead>
              <tr>
                <th>Tarefas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="task-item">
                  <span class="task-text">${taskName}</span>
                  <img src="./images/yes.png" alt="Concluir" class="approve-icon task-icon" title="Marcar como concluída">
                  <img src="./images/cancel.png" alt="Excluir" class="delete-icon task-icon" title="Excluir tarefa">
                </td>
              </tr>
            </tbody>
          </table>
        `;
        $('#table-container').append(tabela);
      } else {
        // Adiciona uma nova linha
        const novaLinha = `
          <tr>
            <td class="task-item">
              <span class="task-text">${taskName}</span>
              <img src="./images/yes.png" alt="Concluir" class="approve-icon task-icon" title="Marcar como concluída">
              <img src="./images/cancel.png" alt="Excluir" class="delete-icon task-icon" title="Excluir tarefa">
            </td>
          </tr>
        `;
        $('#task-table tbody').append(novaLinha);
      }
      $('#task-name').val(''); // Limpa o input
    } else {
      alert('Por favor, insira uma tarefa válida.');
    }
  });

  // Marca tarefa como concluída
  $('#table-container').on('click', '.approve-icon', function () {
    $(this).siblings('.task-text').toggleClass('completed');
  });

  // Exclui a tarefa
  $('#table-container').on('click', '.delete-icon', function () {
    $(this).closest('tr').remove();
    if ($('#task-table tbody tr').length === 0) {
      $('#task-table').remove();
    }
  });

  // Limpa tudo ao clicar em "Limpar"
  $('#botao-limpar').on('click', function () {
    location.reload();
  });
});

