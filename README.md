# Greydive Challenge

## Herramientas Utilizadas:
- **React**
- Styled-Components
- React Toastify
- React Spring/web
- Firebase
- React dotenv

## Objetivos:
- Consumir un archivo **.json** y generar a partir de él mismo una **App de encuesta**
- Enviar las respuestas de la App a una base de datos en **Firebase** de mi propiedad
- Traer las respuestas de la base de datos ya mencionada y mostrarlas en la misma App pero en otra ruta
- Al presionar "Enviar" en el formulario debe aparecer un mensaje y el acceso a la ruta donde se encuentran las respuestas

## Dudas que tuve con el proyecto:
> Con respecto a lo que debería pasar al presionar el botón de "Enviar" no estaba seguro de si tenía que hacer una ventana emergente que muestre un mensaje con un botón de "Ver respuesta" o si tenía que mostrar un mensaje de carga y luego redireccionar hacia la ruta de respuestas. En la versión final opte por la segunda opción, pero debo agregar que también realice la primera opción.
#### Opcion 1:
```js
 //Usando la libreria Sweet Alert 2 dentro del handleSubmit --> '/src/componentsForm.jsx'

const handleSubmit = e => {
    e.preventDefault();
    saveMessage(state) /* funcion asincrona traida desde '/src/utils/SendForm.js' */
        .then(r => {
            Swal.fire(r)
            .then(res => navigate(`/success?id=${r}`) )
        })
        .catch(r => Swal.fire(r))
};
```
   > En este código la función saveMessage() recibe el objeto generado por el formulario y lo envía a la base de datos en firebase y retorna el id del documento creado, usando [Sweet Alert 2](https://sweetalert2.github.io/) muestro la respuesta y un botón de "ok". Al darle click navegaba hacia la ruta "/success" donde usando el hook useSearchParams() uso el id para traer la información del formulario
#### Opcion 2:
```js
// Usando la libreria React Toastify y un useState adicional
  const handleSubmit = e => {
        setLoading(!loading);
        setState({
            ...state,
            terms_and_conditions: false
        });
        e.preventDefault();
        saveMessage(state)
            .then(r => {
                toast.success('Exito!')
                navigate(`/success?id=${r}`)
            })
    };
```
> En este código adicione un setState() que cambie los términos y condiciones a false para que se deshabilite el botón submit, además un segundo setLoading() que cambiará el estado loading de false a true para que se renderice un mensaje de "Enviando Formulario...", en este caso el usuario no debe hacer ningún click adicional para que sea redirigido a la ruta '/success' y muestre un mensaje de éxito usando [React Toastify](https://fkhadra.github.io/react-toastify/introduction/)



## Proyecto finalizado: [Deploy](https://challenge-greydive-gamma.vercel.app/).
