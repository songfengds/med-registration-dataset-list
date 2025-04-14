
$(document).ready(function () {
  fetch('data/datasets.json')
    .then(response => response.json())
    .then(data => {
      const tbody = $('#datasetTable tbody');
      data.forEach(dataset => {
        const row = `
          <tr>
            <td>${dataset.name}</td>
            <td>${dataset.modality}</td>
            <td>${dataset.organs}</td>
            <td><a href="${dataset.link}" target="_blank">Link</a></td>
          </tr>
        `;
        tbody.append(row);
      });
      $('#datasetTable').DataTable();
    });
});
