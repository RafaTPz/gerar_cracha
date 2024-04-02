import Slw from "sweetalert2"

export default async function alert(tipo, mensagem){
    if (tipo == "Erro") {
        return await Slw.fire({
          title: "Erro",
          text: `${mensagem}`,
          icon: "error",
          iconColor: "#ff735c",
          confirmButtonColor: "#ff735c",
          confirmButtonText: "Confirmar",
        });
      } else if (tipo == "Alert") {
        return await Slw.fire({
          title: "Alerta",
          text: `${mensagem}`,
          icon: "warning",
          showCancelButton: true,
          cancelButtonText: "Cancelar",
          cancelButtonColor: "#ff735c",
          iconColor: "#ff735c",
          confirmButtonColor: "#32CD32",
          confirmButtonText: "Confirmar",
        });
      } else {
        return await Slw.fire({
          title: "Sucesso",
          text: `${mensagem}`,
          icon: "success",
          iconColor: "#ff735c",
          confirmButtonColor: "#32CD32",
          confirmButtonText: "Confirmar",
        });
    };
};