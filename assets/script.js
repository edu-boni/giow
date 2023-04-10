$(document).ready(function () {
    $('#btn-open').click(function () {
        Swal.fire({
            title: 'Olá, meu amor',
            text: 'Para começar, vamos ouvir uma história?',
            icon: 'question',
            showCancelButton: false,
            confirmButtonText: 'Sim',
            confirmButtonColor: '#5BCEFA'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Era uma vez...',
                    html: '<img src="https://usagif.com/wp-content/uploads/2022/4hv9xm/crying-emoji-9.gif">' +
                        '<p>Era uma vez um menininho muito imaturo, bobo, chato e que tinha medo de tudo.</p>',
                    showConfirmButton: true,
                    confirmButtonText: 'Prosseguir',
                    confirmButtonColor: '#5BCEFA',
                }).then(() => {
                    Swal.fire({
                        title: 'E então...',
                        html: '<img src="https://usagif.com/wp-content/uploads/gif/blushing-39.gif">' +
                            '<p>Ele tinha vergonha da sua aparência, medo de existir e sempre se sentia deixado de lado.</p>',
                        icon: 'info',
                        confirmButtonText: 'Que triste...',
                        confirmButtonColor: '#5BCEFA',
                    }).then(() => {
                        Swal.fire({
                            title: 'Até que...',
                            html: '<img src="https://usagif.com/wp-content/uploads/gifs/sun-84.gif">' +
                                '<p>Ele acreditou estar sozinho para o resto da eternidade, mas algo surgiu...</p>',
                            icon: 'info',
                            confirmButtonText: 'O quê?!',
                            confirmButtonColor: '#5BCEFA',
                        }).then(() => {
                            Swal.fire({
                                title: 'Finalmente...',
                                html: '<img src="https://usagif.com/wp-content/uploads/gif-heart-47.gif">' +
                                    '<p>Ele encontrou uma pessoa especial. Essa pessoa era de alguma forma, diferente...</p>',
                                icon: 'info',
                                confirmButtonText: 'Quão diferente?',
                                confirmButtonColor: '#5BCEFA',
                            }).then(() => {
                                Swal.fire({
                                    title: 'E então...',
                                    html: '<img src="https://usagif.com/wp-content/uploads/anime-love-29.gif">' +
                                        '<p>Ah, ela era linda. Magnífica. No começo tinha cabelos longos... depois eles encurtaram, mas apesar dos fios curtos, o amor permaneceu longo.</p>',
                                    icon: 'info',
                                    confirmButtonText: 'E o que ela fez?',
                                    confirmButtonColor: '#5BCEFA',
                                }).then(() => {
                                    Swal.fire({
                                        title: 'Bom...',
                                        html: '<img src="https://usagif.com/wp-content/uploads/anime-love-13.gif">' +
                                            '<p>Ela o ensinou que não era motivo de vergonha simplesmente querer existir. O ensinou que ele era muito mais do que aquilo que já tinham dito para ele.</p>',
                                        icon: 'info',
                                        confirmButtonText: 'E como terminou?',
                                        confirmButtonColor: '#5BCEFA',
                                    }).then(() => {
                                        Swal.fire({
                                            title: 'Ah...',
                                            icon: 'info',
                                            html: '<img src="https://usagif.com/wp-content/uploads/gif/anime-hug-73.gif">' +
                                                '<p>Ele começou a gostar mais de si mesmo e olhar melhor para dentro da própria alma. Graças ao amor externo que sofreu, foi capaz de começar a finalmente, entender que talvez merecesse ser amado. Foi desse jeito que ele percebeu que havia outras essências dentro dele e, talvez, essas essências não fossem necessariamente masculinas.</p>',
                                            confirmButtonText: 'Então ele é ela?',
                                            confirmButtonColor: '#5BCEFA',
                                        }).then(() => {
                                            Swal.fire({
                                                title: 'Sabe?',
                                                icon: 'success',
                                                html: '<img src="https://usagif.com/wp-content/uploads/anime-love-56.gif">' +
                                                '<p>Acho que tanto faz, sabe? O importante é que todo o caráter da pessoa que ele conheceu o ajudou a quebrar paradigmas e entender o que ele realmente queria. Devemos focar no seguinte ponto: Independentemente de qualquer outra coisa, ele poderia ser ela ou não, mas aquela pessoa o aceitaria independente do que ele descobrisse ser. Não ser tratado como alvo de piada e aberração, mas com amor e aceitação foi uma coisa que nunca sairá da mente delu.</p>',
                                                confirmButtonText: 'Que incrível!',
                                                confirmButtonColor: '#5BCEFA',
                                            }).then(() => {
                                                Swal.fire({
                                                    title: 'Que bom que finalizou a história',
                                                    icon: 'success',
                                                    text: 'Vá para a segunda página para continuar navegando',
                                                    confirmButtonText: 'Ok',
                                                    confirmButtonColor: '#5BCEFA',
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            }
        });
    });
});

