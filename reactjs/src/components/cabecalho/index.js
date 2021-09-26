

export default function Cabecalho() {
    return (
        <div class="f10-cabecario">
            <div class="f10-parte1">
                <div class="f10-logo"><img src="../../assets/images/pagina 9,10,11,12/f10-logo.png" alt="" /></div>
                <div class="f10-nome">LocalJobs</div>
            </div>

            <div class="f10-pesquisa2">
                <div class="f10-pesquisa">
                    <div class="f10-filtrosimg"><img src="../../assets/images/pagina 9,10,11,12/f10-cargo.png" alt=""/></div>

                    <select name="select" >
                        <option value="valor1" selected>Todas áreas</option>
                        <option value="valor2"> </option>
                    </select>
                    <hr size="30"/>
                    <input class="f10-cargo" type="search" placeholder="Digite Um Cargo" />
                    <div class="f10-filtrosimg"><img src="../../assets/images/pagina 9,10,11,12/f10-localidade.png" alt=""/></div>
                    <hr size="30"/>
                    <input class="f10-cidade" type="search" placeholder="Digite Uma Cidade"/>
                    <div class="f10-lupa"><img src="../../assets/images/pagina 9,10,11,12/f10-lupa.png" alt="" /></div>
                </div>
            </div>    
        </div>
    )
}