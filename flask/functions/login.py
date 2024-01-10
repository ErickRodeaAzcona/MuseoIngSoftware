from flask import request, render_template
def login():
    usuario = request.form.get('usuario')
    password = request.form.get('password')

    # Realiza la validación de los datos aquí (por ejemplo, verifica si los campos están completos).

    #if not usuario or not contrasena:
     #   error = "Todos los campos son obligatorios."
      #  return render_template('index.html', error=error)

    # Si la validación es exitosa, realiza alguna acción (por ejemplo, guarda los datos en una base de datos).
    # Aquí puedes agregar tu lógica de manejo de datos.

    return f"<h1>Formulario recibido: Usuario = {usuario}, Contrasena = {password}</h1>"