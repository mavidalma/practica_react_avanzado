# REACT avanzado

## Redux

Como info. de user solo meto un booleano para saber si está logueado o no. Al no tener más funcionalidad que la de dejar acceder al contenido o no, no tiene sentido identificar al user (todos van a ser iguales...)

## Form
Lo uso en Login, Register, AdFilter y CreateAd, no llegué a meterlo en EditAd, pero toda la funcionalidad está preparada

## Testing

Como el manejo del store lo hago siempre en las cargas de los componentes, no tenía ningún componente en el que testar una acción "directamente ejecutada por el usuario" en el store... Pero si testo las actions, reducers y selectors que se ejecutan en la App.