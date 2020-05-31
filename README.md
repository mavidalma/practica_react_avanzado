# REACT avanzado

## Redux

Como info. de user solo meto un booleano para saber si está logueado o no. Al no tener más funcionalidad que la de dejar acceder al contenido o no, no tiene sentido identificar al user (todos van a ser iguales...)

La edición de un Ad se hace directamente con la API. Podría sacarlo filtrando los Ads del store, pero teniendo el método en la API, preferí dejarlo así para poder acceder directamente a través de las url params. Más sencillo emho.

## Form
Todos los formularios de la app aprovechan esta funcionalidad.

## Testing

Como el manejo del store lo hago siempre en las cargas de los componentes, no tenía ningún componente en el que testar una acción "directamente ejecutada por el usuario" en el store... Pero si testo las actions, reducers y selectors que se ejecutan en la App.