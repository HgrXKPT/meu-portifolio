window.revelar = ScrollReveal({reset:true})

//mid do site

revelar.reveal('.texto-principal-efeito',{
    distance:'40%',
    duration: 4000,
    origin: 'left',
})

revelar.reveal('.foto-efeito',{
    distance:'40%',
    duration: 4000,
    origin: 'right',
})

revelar.reveal('.sobre-efeito', 
    {
        duration:3000,
        distance: '90px',
        viewFactor: 0.2

})

revelar.reveal('.nav-efeito', 
    {
        duration:3000,
        distance: '90px',
        origin: 'top'

})

revelar.reveal('.projetos-efeito', 
    {
        duration:3000,
        distance: '90px',
        origin: 'top',
        viewFactor: 0.2

})
