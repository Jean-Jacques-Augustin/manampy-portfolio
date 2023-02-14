
function Hack(ip: string, port:number, type: number) {
        console.log("En train de hack le serveur " + ip + " sur le port " + port + " avec le type " + type);


        if (type == 1) {
            console.log("Hack réussi");
        } else {
            console.log("Hack échoué");
        }

        return type;
}

export default Hack;