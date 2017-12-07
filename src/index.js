console.log(32313212)

document.querySelectorAll('.month')
  .forEach((month) => month.innerHTML = new Array(parseInt(month.getAttribute('data-length')))
    .fill()
    .map((_, i) => i+1)
    .map((d) => `<li${Math.random() > 0.75 ? ' data-holiday="Holiday"' : ''}>${d}</li>`)
    .join('\n')
  )