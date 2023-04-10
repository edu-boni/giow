let pontuacao_quiz = 0;

function quiz() {

  Swal.fire({
    icon: 'info',
    title: 'Olá, meu gato!', 
    html: '<img src="../assets/img/presente.gif" style="max-width: 300px;">' +
    '<p>Vamos responder umas perguntinhas rápidas e ter a chance de ganhar um presentinho, vamos?</p>',
    showCancelButton: true,
    confirmButtonText: 'Simmmmmm!',
    cancelButtonText: 'NÃO!'
  }).then((result) => {
    if (result.isConfirmed) {
      pergunta1();
    }
  });
}

function pergunta1() {
    Swal.fire({
      icon: 'question',
      title: 'Primeira pergunta',
      text: 'Qual a minha cor preferida?',
      confirmButtonText: 'Responder',
      allowOutsideClick: false,
      input: 'radio',
      inputOptions: {
        'Roxo': 'Roxo',
        'Verde': 'Verde'
      },
      inputValidator: (value) => {
        if (value === 'Verde') {
          pontuacao_quiz++;
          Swal.fire({
            title: 'Parabéns!',
            text: 'Você acertou!',
            icon: 'success',
            showCancelButton: true,
            confirmButtonText: 'Próxima pergunta',
            cancelButtonText: 'Sair'
          }).then((result) => {
            if (result.isConfirmed) {
              pergunta2();
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              Swal.fire({
                title: 'Joguinho fechado',
                text: 'Seu progresso foi resetado',
                icon: 'info',
                confirmButtonText: 'Ok'
              });
              pontuacao_quiz = 0;
            }
          });
        } else {
          Swal.fire({
            title: 'Resposta incorreta!',
            text: 'Minha cor favorita ainda é verde! ("Ainda" porque o roxo vem criando uma certa tensão aí)',
            icon: 'error',
            confirmButtonText: 'Próxima pergunta',
            showCancelButton: true,
            cancelButtonText: 'Sair'
          }).then((result) => {
            if (result.isConfirmed) {
              pergunta2();
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              Swal.fire({
                title: 'Joguinho fechado',
                text: 'Seu progresso foi resetado',
                icon: 'info',
                confirmButtonText: 'Ok'
              });
              pontuacao_quiz = 0;
            }
          });
        }
      }
    });
  }
  
  function pergunta2() {
    Swal.fire({
      icon: 'question',
      title: 'Segunda pergunta',
      text: 'Quantas poesias e músicas eu já fiz pra você?',
      confirmButtonText: 'Responder',
      allowOutsideClick: false,
      input: 'radio',
      inputOptions: {
        '1': '1',
        '5': '5',
        '7': '7',
        '12': '12'
      },
      inputValidator: (value) => {
        if (value === '12') {
          pontuacao_quiz++;
          Swal.fire({
            title: 'Parabéns!',
            text: 'Você acertou! A verdade é que eu nem sei exatamente, mas foram tantas que com certeza passam de doze.',
            icon: 'success',
            showCancelButton: true,
            confirmButtonText: 'Próxima pergunta',
            cancelButtonText: 'Sair'
          }).then((result) => {
            if (result.isConfirmed) {
              pergunta3();
            } else if (result.dismiss) {
              Swal.fire({
                title: 'Joguinho fechado',
                text: 'Seu progresso foi resetado',
                icon: 'info',
                confirmButtonText: 'Ok'
              });
              pontuacao_quiz = 0;
            }
          });
        } else {
          Swal.fire({
            title: 'Resposta incorreta!',
            text: 'A resposta correta é 12! A verdade é que eu nem sei exatamente, mas foram tantas que com certeza passam de doze.',
            icon: 'error',
            confirmButtonText: 'Próxima pergunta',
            showCancelButton: true,
            cancelButtonText: 'Sair'
          }).then((result) => {
            if (result.isConfirmed) {
              pergunta3();
            } else if (result.dismiss) {
              Swal.fire({
                title: 'Joguinho fechado',
                text: 'Seu progresso foi resetado',
                icon: 'info',
                confirmButtonText: 'Ok'
              });
              pontuacao_quiz = 0;
            }
          });
        }
      }
    });
  }
  

function pergunta3() {
  let acertou_3 = false;
  acertou_3 = false;

  Swal.fire({
    icon: 'question',
    title: 'Terceira pergunta',
    allowOutsideClick: false,
    text: 'Qual a porcentagem de vezes que eu quis um futuro que não tivesse você comigo?',
    input: 'range',
    inputAttributes: {
      min: 0,
      max: 100,
      step: 5,
      value: 50
    },
    inputValue: 50,
    inputLabel: 'Porcentagem:',
    confirmButtonText: 'Responder',
    preConfirm: (value) => {
      if (value == 0) {
        pontuacao_quiz++;
        acertou_3 = true;
        return true;
      }
    }
  }).then((result) => {
    if (result.isConfirmed) {
      if (acertou_3) {
        Swal.fire({
          title: 'Parabéns!',
          text: `Obviamente, eu quero você em todas as versões dos meus futuros.`,
          icon: 'success',
          showCancelButton: true,
          cancelButtonText: 'Sair',
          confirmButtonText: 'Próxima pergunta'
        }).then((result) => {
            if (result.isConfirmed) {
              pergunta4();
            } else if (result.dismiss) {
              Swal.fire({
                title: 'Joguinho fechado',
                text: 'Seu progresso foi resetado',
                icon: 'info',
                confirmButtonText: 'Ok'
              });
              pontuacao_quiz = 0;
            }
          });
      } else {
        Swal.fire({
          title: 'Resposta incorreta!',
          text: 'Tá de sacanagem, né? É óbvio que a resposta é 0%! Impossível ser outro número.',
          icon: 'error',
          showCancelButton: true,
          cancelButtonText: 'Sair',
          confirmButtonText: 'Próxima pergunta'
        }).then((result) => {
            if (result.isConfirmed) {
              pergunta4();
            } else if (result.dismiss) {
              Swal.fire({
                title: 'Quiz fechado',
                text: 'Seu progresso foi resetado',
                icon: 'info',
                confirmButtonText: 'Ok',
              });
              pontuacao_quiz = 0;
            }
        });
      }
    }
  });
}


function pergunta4() {
  Swal.fire({
    title: 'Pergunta final!',
    text: 'Quem eu mais quero beijar?',
    confirmButtonText: 'Responder',
    allowOutsideClick: false,
    input: 'radio',
    inputOptions: {
      'Kurt Cobain': 'Kurt Cobain',
      'Yungblud': 'Yungblud',
      'Giow': 'Giow',
      'Yasminz Finney (Elle)': 'Yasminz Finney (Elle)'
    },
    inputValidator: (value) => {
      if (value === 'Giow') {
        pontuacao_quiz++;
        Swal.fire({
          title: 'Parabéns!',
          text: 'Você acertou! Óbvio que as outras opções eram tentadoras, mas perto de você não tem comparação, né...',
          icon: 'success',
          showCancelButton: true,
          confirmButtonText: 'Finalizar quiz',
          cancelButtonText: 'Sair'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: 'Pontuação',
              html: `<p>Parabéns por terminar o joguinho! Sua pontuação é ${pontuacao_quiz} de 4.</p>
                    <p>Além disso, independentemente da sua pontuação, você acaba de ganhar sorvete e um sonho de valsa, isso mesmo!
                    No próximo dia de aula, te pagarei sorvete na cantina e darei um bombomzinho. =)</p>
                    <img src="https://usagif.com/wp-content/uploads/gif/strawberryicecream-26.gif" style="max-width: 300px;">`, 
              icon: 'info',
              confirmButtonText: 'Finalizar jogo'
            });
          }
        });
      } else {
        Swal.fire({
          title: 'Resposta incorreta!',
          text: 'A resposta correta é Giow, claro! As outras opções são tentadoras, mas perto de você, quem são?',
          icon: 'error',
          confirmButtonText: 'Finalizar jogo'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: 'Pontuação',
              html: `<p>Parabéns por terminar o joguinho! Sua pontuação é ${pontuacao_quiz} de 4.</p>
                    <p>Além disso, independentemente da sua pontuação, você acaba de ganhar sorvete e um sonho de valsa, isso mesmo!
                    No próximo dia de aula, te pagarei sorvete na cantina e darei um bombomzinho. =)</p>
                    <img src="https://usagif.com/wp-content/uploads/gif/strawberryicecream-26.gif" style="max-width: 300px;">`, 
              icon: 'info',
              confirmButtonText: 'Finalizar jogo'
            });
          }
        });
      }
    }
  });
}

  