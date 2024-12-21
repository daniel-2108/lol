<?php

class BaseDatos {

    public static function conectarDB() {
        $conexion = null;

        try {
            // Configurar parámetros de conexión
            $servidor = "localhost"; // Servidor de la base de datos
            $baseDatos = "proyectopec"; // Nombre de la base de datos
            $usuario = "root"; // Usuario de la base de datos
            $contraseña = ""; // Contraseña del usuario

            // Establecer la conexión usando PDO
            $conexion = new PDO("mysql:host=$servidor;dbname=$baseDatos", $usuario, $contraseña);
            $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // Modo de error de PDO
            echo "Conexión exitosa a la base de datos.\n";
        } catch (PDOException $e) {
            echo "Error al conectar con la base de datos: " . $e->getMessage() . "\n";
        }

        return $conexion;
    }
}

?>