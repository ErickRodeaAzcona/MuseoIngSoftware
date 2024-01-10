from flask import Flask, render_template, request, redirect, flash, session
import pymysql
from flask_session import Session

connection = pymysql.connect(
    host='192.168.56.1',
    user='root',
    password='',
    db='tamayito'
)

app = Flask(__name__)
app.secret_key = 'tu_clave_secreta'


@app.route('/Login',methods = ['GET', 'POST'])
def home():

    usuario = request.form.get('username')
    contrasena = request.form.get('password')
    
    # Ejecutar la consulta
    cursor = connection.cursor()
    cursor.execute("SELECT rol FROM usuarios WHERE correo = %s", usuario)
    rol = cursor.fetchone()
    if rol==None:
        return redirect("/Login")
    else:
        rol = ' '.join(map(str, rol))
        print(rol)
        print(usuario)
        print(contrasena)
        results = cursor.execute("SELECT * FROM usuarios WHERE correo = %s AND password = %s", (usuario, contrasena))
        print(results)
        # Verificar si se encontró algún usuario
        if results and (rol == "usuario"):
            return redirect("/")
        elif results and (rol == "administrador"):
            return redirect("/BienvenidoAdmin")
        else:
            return redirect("/Login")
    
@app.route('/Registrarse',methods = ['GET', 'POST'])
def registro():
        nombre = request.form.get('nombre')
        usuario = request.form.get('correo')
        contrasena = request.form.get('password')
        rol = "usuario"
        cursor = connection.cursor()
        cursor.execute("INSERT INTO `usuarios` (`nombre`, `correo`, `password`, `rol`) VALUES (%s, %s, %s, %s)", (nombre, usuario, contrasena, rol))
        connection.commit()
        return redirect("/Login")

#################____Informacion_____######################

@app.route('/ModificarInformacion',methods=['GET','POST'])
def ModificarInformacion():
    if request.method == 'POST':
        nuevo_texto = request.form['texto']
        cursor = connection.cursor()
        cursor.execute('UPDATE infomuseo SET texto = %s WHERE id = "Informacion"', nuevo_texto)
        connection.commit()
        cursor.close()
        #return result_str='Se actualizo correctamente' 
        return redirect('/ModificarInformacion')
    else:
        cursor = connection.cursor()
        cursor.execute('SELECT texto FROM infomuseo where id = "Informacion"')
        result = cursor.fetchone()
        cursor.close()
        result_str = ' '.join(map(str, result))
        #return result_str
        return render_template('ModificarInformacion.html', data=result_str)

@app.route('/Informacion', methods=['GET'])
def Informacion():
    cursor = connection.cursor()
    cursor.execute('SELECT texto FROM infomuseo where id ="Informacion"')
    result = cursor.fetchone()
    cursor.close()
    result_str = ' '.join(map(str, result))
    return {
        "informacion": result_str
    }


#################____Horarios_____######################

@app.route('/ModificarHorarios', methods = ['GET','POST'])
def ModificarHorarios():
    if request.method == 'POST':
        nuevo_texto = request.form['texto']
        cursor = connection.cursor()
        cursor.execute('UPDATE horarios SET texto = %s WHERE id = 1', nuevo_texto)
        connection.commit()
        cursor.close()
        flash("Se actualizo correctamente")
        return redirect('/ModificarHorarios')
    else:
        cursor = connection.cursor()
        cursor.execute('SELECT texto FROM horarios where id = 1')
        result = cursor.fetchone()
        cursor.close()
        result_str = ' '.join(map(str, result))
        return {
            "horario": result_str
        } 
        #return render_template('ModificarHorarios.html', data=result_str)

@app.route('/Horarios')
def Horarios():
    cursor = connection.cursor()
    cursor.execute('SELECT texto FROM horarios where id = 1')
    result = cursor.fetchone()
    cursor.close()
    result_str = ' '.join(map(str, result))
    return {
            "horario": result_str
        } 
    #return render_template('Horarios.html', data=result_str)


#################____Disposiciones_____######################

@app.route('/ModificarDisposiciones', methods=['GET','POST'])
def ModificarDisposiciones():
    if request.method == 'POST':
        nuevo_texto = request.form['texto']
        cursor = connection.cursor()
        cursor.execute('UPDATE infomuseo SET texto = %s WHERE id = "Disposiciones"', nuevo_texto)
        connection.commit()
        cursor.close()
        #return result_str='Se actualizo correctamente' 
        return redirect('/ModificarDisposiciones')
    else:
        cursor = connection.cursor()
        cursor.execute('SELECT texto FROM infomuseo where id = "Disposiciones"')
        result = cursor.fetchone()
        cursor.close()
        result_str = ' '.join(map(str, result))
        #return result_str 
        return render_template('ModificarDisposiciones.html', data=result_str)

@app.route('/Disposiciones', methods=['GET'])
def Disposiciones():
    cursor = connection.cursor()
    cursor.execute('SELECT texto FROM infomuseo where id = "Disposiciones"')
    result = cursor.fetchone()
    cursor.close()
    result_str = ' '.join(map(str, result))
    return {
        "disposiciones": result_str
    }

#################____Recorrido Virtual_____######################

@app.route('/ModificarRecorridoVirtual', methods=['GET','POST'])
def ModificarRecorridoVirtual():
    if request.method == 'POST':
        nuevo_texto = request.form['texto']
        cursor = connection.cursor()
        cursor.execute('UPDATE infomuseo SET texto = %s WHERE id = "Recorrido"', nuevo_texto)
        connection.commit()
        cursor.close()
        #return result_str='Se actualizo correctamente' 
        return redirect('/ModificarRecorridoVirtual')
    else:
        cursor = connection.cursor()
        cursor.execute('SELECT texto FROM infomuseo where id = "Recorrido"')
        result = cursor.fetchone()
        cursor.close()
        result_str = ' '.join(map(str, result))
        #return result_str 
        return render_template('ModificarRecorridoVirtual.html', data=result_str)

@app.route('/RecorridoVirtual', methods=['GET'])
def RecorridoVirtual():
    cursor = connection.cursor()
    cursor.execute('SELECT texto FROM infomuseo where id = "Recorrido"')
    result = cursor.fetchone()
    cursor.close()
    result_str = ' '.join(map(str, result))
    return {
        "recorrido": result_str
    }

#################____Salas_____######################


@app.route('/AgregarImgSalas', methods=['GET','POST'])
def AgregarImgSalas():
    if request.method == 'POST':
        url = request.form['url']
        sala = request.form['sala']
        cursor = connection.cursor()
        cursor.execute("INSERT INTO `imagenes_salas` (`sala`, `url`) VALUES (%s, %s)", (sala, url))
        connection.commit()
        cursor.close()
        #return result_str='Se actualizo correctamente' 
        return redirect('/AgregarImgSalas')

@app.route('/Salas', methods=['GET'])
def Salas():
    cursor = connection.cursor()
    cursor.execute('SELECT url FROM imagenes_salas where  sala= "autos"')
    result = cursor.fetchall()

    autos = ' '.join(map(str, result))
    cursor.execute('SELECT url FROM imagenes_salas where  sala= "obras"')
    result = cursor.fetchall()

    obras = ' '.join(map(str, result))
    cursor.execute('SELECT url FROM imagenes_salas where  sala= "prehispanico"')
    result = cursor.fetchall()
    cursor.close()
    prehispanico = ' '.join(map(str, result))
    return {
        "url_autos": autos,
        "url_obras": obras,
        "url_prehispanico": prehispanico
    }


#################____Recuperar contraseña_____######################


if __name__ == '__main__':
    app.run(debug= True)