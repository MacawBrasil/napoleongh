import Link from "next/link";
import { NextSeo } from "next-seo";

import styles from "styles/Termos.module.scss";

import Header from "components/Header";
import Title from "components/Title";
import Footer from "components/Footer";
import MainIntern from "components/MainIntern";

import { getSettingsContent, getSegments } from "../lib/api";

export default function TermoDeUso({ settings, segments }: any) {
  return (
    <>
      <NextSeo
        title={"Política de Privacidade - Napoleon Abrasives"}
        description={"Política de Privacidade, Napoleon, Abrasives"}
        noindex={true}
        nofollow={true}
      />

      <Header settings={settings} segments={segments} />

      <div className={styles.container}>
        <MainIntern title={"Política de Privacidade"} fundo="sobre" />

        <div className={styles.termos}>
          <p style={{ textAlign: "center" }}><b>Conhecendo a nossa <i>Política de Privacidade</i></b></p>
          <p style={{ textAlign: "center" }}><b>NAPOLEON</b></p>
          <br />
          <p><b>Referências gerais e dados de contato LGPD</b></p>
          <br />
          <p>Data da última atualização: <b>22 de novembro de 2021</b>
          <br /><b><i>Canal de Comunicação do Usuário:</i></b> <a href="mailto:lgpd@napoleon.com.br">lgpd@napoleon.com.br</a>
          <br />Encarregado da Proteção Privacidade e Dados Pessoais: <b>Luiz Fernando Del Rio Horn</b>
          <br /><b><i>Canal de Comunicação com o Encarregado:</i></b> <a href="mailto:encarregado@actatechlaw.com.br">encarregado@actatechlaw.com.br</a></p>
          <br />
          <p><b>Declaração de Compromisso com a Privacidade e com a Proteção dos Dados Pessoais</b></p>
          <br />
          <p>A <b>NAPOLEON</b> deseja a você, nosso usuário, uma ótima experiência de contato com nossos canais de comunicação, produtos ou serviços, sempre baseada na percepção de respeito, transparência, autonomia, segurança, satisfação e alegria. Nossas ações sempre irão priorizar o resguardo da sua privacidade em todas as etapas da relação, não importando os tipos de meios, marcas, produtos e serviços por nós disponibilizados. Sempre iremos considerar os seus dados pessoais, identificados ou identificáveis, como uma prioridade a ser resguardada na nossa organização.</p>
          <p>Estes são os valores condizentes com a nossa <b><i>Política de Privacidade</i></b>, alinhada as mais relevantes leis informacionais pelo mundo, da qual sentimos muito orgulho e convidamos que a conheça em toda sua extensão, condição para permanecer conectado ou, de qualquer forma, ligado às múltiplas frentes de atuação da <b>NAPOLEON</b>, de modo a <b>garantir a plena interação aos procedimentos concernentes aos dados pessoais e suas implicações para a sua privacidade, indicado as práticas de acesso, coleta, utilização, armazenamento e descarte dos dados pessoais.</b></p>
          <br />
          <p><b>Estrutura e conteúdo da <i>Política de Privacidade</i></b></p>
          <br />
          <p>Para facilitar sua compreensão, dividimos este documento em <b>dez partes</b>. Entenda bem como aproveitá-lo na sua leitura integral e, depois, como fazer a localização rápida das partes de destaque:</p>
          <div>
            <p><b>●	Parte 1:</b> quem somos, definições, outros documentos importantes e o porquê de uma política de privacidade;</p>
            <p><b>●	Parte 2:</b> que tipos e fontes de dados pessoais são coletados e quais não são coletados;</p>
            <p><b>●	Parte 3:</b> como e quando podem serem coletados os dados pessoais;</p>
            <p><b>●	Parte 4:</b> quais as finalidades (propósitos) dos dados pessoais coletados;</p>
            <p><b>●	Parte 5:</b> quais as bases legais para tratamento dos dados pessoais;</p>
            <p><b>●	Parte 6:</b> casos de compartilhamento dos dados pessoais, transferência internacional de dados pessoais e as obrigações dos parceiros e terceiros;</p>
            <p><b>●	Parte 7:</b> seus direitos, mecanismos de autogerenciamento (controles e escolhas) no <b><i>Banner</i> LGPD</b> e detalhamento dos controles e escolhas;</p>
            <p><b>●	Parte 8:</b> segurança, armazenamento e exclusão dos dados pessoais;</p>
            <p><b>●	Parte 9:</b> alterações desta política de privacidade, demais documentos de regramento e legislação aplicável;</p>
            <p><b>●	Parte 10:</b> fale conosco, Encarregado da Proteção da Privacidade e dos Dados Pessoais, disposições gerais e finais.</p>
          </div>

          <br />
          <p><b>Parte 1: Quem somos, definições, outros documentos importantes e o porquê de uma política de privacidade</b></p>
          <br />
          <p>Somos a <b>NAPOLEON</b>, uma organização dedicada a você, nosso usuário, titular de dados pessoais. Por isso formulamos e disponibilizamos este documento dedicado unicamente para esclarecer, de forma clara e objetiva, nossos procedimentos quando o assunto é privacidade e dados pessoais. Pedimos que leia atentamente, pois ao usar o <i>website</i>, plataforma, aplicativos, dispositivos e outros serviços atrelados, bem como acessar outros ambientes e meios de comunicação, estas disposições, assim como dos demais documentos legais, estarão valendo.</p>
          <div>
            <p><b>●	Quem somos: ABRASIVOS DBT LTDA.</b>, pessoa jurídica de direito privado, inscrita no Cadastro Nacional de Pessoas Jurídicas – CNPJ/MF sob o nº 02.399.258/0001-38, com sede na Rua Professor Guerreiro Lima, nº 797, bairro Pio X, Caxias do Sul-RS, Brasil, CEP 95034-490;</p>
            <p><b>●	Definições:</b></p>
            <div style={{marginLeft: "3rem"}}>
              <p><b>●	Termos de designação da NAPOLEON:</b> todas as vezes que encontrar os termos “nós”, “nossos”, a referência é ao controlador dos seus dados pessoais, ou seja, a <b>NAPOLEON</b>;</p>
              <p><b>●	Termos de designação do usuário:</b> todas as vezes quer ler “você”, “seu”, “sua”, nos referimos a você, nosso usuário, titular de dados pessoais;</p>
              <p><b>●	Definição de parceiros:</b> todas as vezes que ler “parceiros”, nos referimos aos prestadores de serviços que operam em nosso nome, seja no nosso <i>website</i>, plataforma, aplicativos, dispositivos e nos demais canais de relacionamento da <b>NAPOLEON</b>;</p>
              <p><b>●	Definição de terceiros:</b> todas as vezes que ler “terceiros”, nos referimos aos demais prestadores de serviços da internet que não operam em nosso nome e tampouco nos nossos canais de relacionamento, mas que, de qualquer forma, vinculam seus bancos de dados ou outras ferramentas de navegação ou analíticas com a <b>NAPOLEON</b> para fins de operacionalização dos serviços disponibilizados no nosso <i>website</i> e demais canais de relacionamento;</p>
              <p><b>●	Dados não pessoais:</b> informação, física, eletrônica ou digital, não relacionada à pessoa natural ou física (<b>Tipo 1</b>);</p>
              <p><b>●	Dados pessoais públicos:</b> informação física ou digital relacionada à pessoa natural ou física tornados manifestamente públicos pelo próprio titular (<b>Tipo 2</b>);</p>
              <p><b>●	Dados pessoais <i>genéricos</i>:</b> informação física ou digital relacionada à pessoa natural ou física identificada ou identificável (isBlack);</p>
              <p><b>●	Dados pessoais sensíveis:</b> informação física ou digital vinculado à pessoa natural ou física que diga respeito à origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, referente à saúde ou à vida sexual, genético ou biométrico (<b>Tipo 4</b>);</p>
              <p><b>●	Dados pessoais de crianças e adolescentes:</b> informação física ou digital relacionada à pessoa natural ou física identificada ou identificável relativo à criança ou adolescente (<b>Tipo 5</b>).</p>
            </div>
            <p><b>●	Outros documentos importantes:</b> para a sua segurança e maior facilidade de compreensão de todo o conjunto de regras aplicáveis à proteção da sua privacidade e seus dados pessoais, disponibilizamos outros três documentos muito importantes, todos integrantes desta <b><i>Política de Privacidade</i></b>, então necessários para que você possa permanecer conectado ou, de qualquer forma, ligado às múltiplas frentes de atuação da <b>NAPOLEON</b>, inclusive gerenciando sua experiência conosco. São:</p>
            <br />
            <div style={{marginLeft: "3rem"}}>
              <p><b>●	<i>Termo de Uso do Website</i>:</b> traz as nossas regras de utilização do nosso <i>website</i>, plataforma, aplicativos e dispositivos vinculados, personalizando a sua experiência e garantindo seus direitos;</p>
              <p><b>●	<i>Política de Cordialidade</i>:</b> traz as nossas regras de comportamento para a excelência das relações humanas;</p>
              <p><b>●	<i>Política de Cookies</i>:</b> traz as nossas regras de funcionamento desse tipo de ferramenta de navegação e outros tipos de tecnologias aplicadas no rastreamento, como, por exemplo, <i>flash cookies</i>, <i>pixels</i>, <i>tags</i>, <i>kits</i> de desenvolvimento de <i>software</i>, aplicativos com interfaces programadas, <i>Web beacons</i>, e outros dispositivos, permitindo o gerenciamento de suas próprias configurações (desabilitando o que não interessa), personalizando a sua experiência e garantindo seus direitos de titular de dados pessoais.</p>
            </div>
            <p><b>●	O porquê de uma política de privacidade:</b> sempre que buscamos novas experiências temos a expectativa de nos sentirmos especiais e bem tratados a partir das intenções e necessidades próprias. Nós, da <b>NAPOLEON</b>, sabemos disso, razão pela qual elegemos como prioridade o oferecimento da melhor experiência nos nossos relacionamentos em termos mais customizados possível. Para tanto, precisamos de informações (dados pessoais) que permitam identificar essas particularidades, com vistas à criação do ambiente personalizado e útil para cada um de nossos usuários. Procedimento este que ocorre de forma responsável, transparente, legal e leal. A nossa <b><i>Política de Privacidade</i></b> reflete e contempla todos esses cuidados.</p>
          </div>

          <br />
          <p><b>Parte 2: Que tipos e fontes de dados pessoais são coletados e quais não são coletados</b></p>
          <br />
          <p>É importante que você saiba que os seus dados pessoais serão acessados no limite da necessidade, <b>não sendo objeto de tratamento dados pessoais desprovidos de finalidade e base legal</b>. Além disso, a <b>NAPOLEON não coleta dados pessoais de crianças e adolescentes (T4), bem como dados pessoais sensíveis (T5)</b>. Saiba, em detalhes, quais são os dados pessoais e não pessoais coletados por nós (automatizados ou não), independente de cadastro e/ou conta gerada:</p>
          <br />
          <div style={{marginLeft: "3rem"}}>
            <p><b>●	Dados cadastrais:</b> envolvem a categoria de dados pessoais <i>genéricos</i> (T3), abrangendo: nome completo, endereço de e-mail, telefone;</p>
            <p><b>●	Dados de navegação:</b> envolvem a categoria de dados pessoais <i>genéricos</i> (T3), abrangendo dados como acesso a páginas e serviços da <b>NAPOLEON</b>, produtos, serviços e categorias pesquisados ou visualizados, conteúdo postado, recomendações, comentários, interação com outros perfis e usuários, páginas visitadas em outros <i>sites</i>, informações contidas nas conversas do <i>chat</i> ou bate-papo, geolocalização, contagem de visualizações, de tópicos e perfis seguidos, além de dados coletados enquanto você, usuário, utiliza nossa plataforma, como dados sobre a localização derivada do seu endereço de IP e outros meios, dados técnicos, como os computacionais, aparelhos e dispositivos usados na navegação, tipo de conexão de rede e desempenho do provedor, da rede e do dispositivo utilizado;</p>
            <div style={{marginLeft: "3rem"}}>
              <p><b>●	Acesso aos sinais de <i>Global Positioning System</i> (GPS):</b> da categoria de dados pessoais <i>genéricos</i> (T3), também abrangendo outras informações enviadas pelo dispositivo móvel utilizado para fins de detecção da sua localização e indicação das áreas de ou sem cobertura da <b>EMPRESA</b>, a qual exige autorização especial, podendo ser revogado a qualquer tempo utilizando nosso <b><i>Canal de Comunicação do Usuário</i>:</b> <a href="mailto:lgpd@napoleon.com.br">lgpd@napoleon.com.br</a>;</p>
            </div>
            <p><b>●	Dados de avaliação, pagamento e transações:</b> dados cadastrais, tipo de produto e/ou serviço, quantidade, valores unitários, valor total da transação, natureza da transação financeira, informações da conta bancária e outros meios utilizados, filiação, informações de renda, forma de pagamento, endereço de cobrança, dados do cartão de crédito (nome, endereço, número do cartão de crédito, data da validade e código de segurança, mas somente quando escolhida essa opção, pelo que serão processados e transmitidos os dados para o provedor de serviços de sua escolha para permitir a operação e execução dos controles antifraude), do local de entrega e dicas de localização;</p>
            <p><b>●	Dados de detecção de violações:</b> coletados especificamente para fins de prevenção e defesa (investigação e tomada de medidas) a fraudes e outros tipos de violações.</p>
            <p><b>●	Outros dados que poderão ser coletados:</b> todos em situação de destaque, sendo:</p>
            <div style={{marginLeft: "3rem"}}>
              <p><b>●	Dados pessoais públicos (T2):</b> abrangem informações suas tornadas manifestamente públicas por sua própria iniciativa, mas desde que atreladas a novas finalidades, observados os propósitos legítimos e específicos para o novo tratamento e preservação os seus direitos de titular;</p>
              <p><b>●	Dados pessoais provenientes de coligados/terceiros:</b> nas categorias de dados não pessoais (T1) e de dados pessoais <i>genéricos</i> (T3), coletados fora dos canais e ambientes da <b>EMPRESA</b> por parceiros/terceiros como, por exemplo, complementos dos seus dados cadastrais (nome, filiação, data de nascimento, CPF, RG, número de celular, entre outros), <i>score</i> gerado por agências de crédito, integrante de listas de alerta (como OFAC, CSNU e outras), ou caso seja integrante de lista de Pessoas Expostas Politicamente (PEP), exige-se consentimento específico, podendo ser revogado a qualquer tempo utilizando nosso <b><i>Canal de Comunicação do Usuário</i>:</b> <a href="mailto:lgpd@napoleon.com.br">lgpd@napoleon.com.br</a>;</p>
              <p><b>●	Destaque:</b> informações de <i>login</i> social, caso você realize seu cadastro por meio de uma conta em rede social, como Facebook ou Google, exige-se consentimento específico, podendo ser revogado a qualquer tempo, bastando acessar o <b><i>Banner</i> LGPD</b> ou, querendo, utilizando nosso <b><i>Canal de Comunicação do Usuário</i>:</b> <a href="mailto:lgpd@napoleon.com.br">lgpd@napoleon.com.br</a>.</p>
            </div>
          </div>

          <br />
          <p><b>Parte 3: Como e quando podem serem coletados os dados pessoais</b></p>
          <br />
          <p>Os dados, pessoais ou não (T1, T2 e T3 e, ainda, provenientes de parceiros/terceiros) serão coletados pelos seguintes meios:</p>
          <div>
            <p><b>●	Por meio do acesso ao nosso <i>website</i> ou <i>website</i>/plataforma/aplicativo de terceiros:</b> temos controle dos acessos ou das navegações que ocorrem no nosso <i>website</i> e, geralmente, reunimos, coletamos e registramos (com auxílio de parceiros ou não) tais usos, sessões e informações relacionados ao uso de <i>cookies</i> e outras tecnologias de rastreamento, como no caso do <i>flash cookies</i>, <i>pixels</i>, <i>tags</i>, <i>kits</i> de desenvolvimento de <i>software</i>, aplicativos com interfaces programadas, <i>web beacons</i>, inclusive quando você visita nosso <i>website</i> a partir de <i>websites</i>, aplicativos, dispositivos ou plataformas de terceiros, utilizando um ou mais dispositivos, estando ou não conectado ou registrado;</p>
            <div style={{marginLeft: "3rem"}}>
              <p><b>●	Coleta via <i>website</i>:</b> quando você visita um <i>website</i>, o seu dispositivo e <i>browser</i> (navegador) divulgam automaticamente certas informações (tal como o tipo de dispositivo, sistema operativo, tipo de <i>browser</i>, definições do <i>browser</i>, endereço IP, definições de idioma, datas e horas de ligação a um <i>website</i> e outras informações de comunicações técnicas), algumas ou todas na condição de dados pessoais;</p>
              <p><b><i>●	Cookies:</i></b> nós, e determinados parceiros, coletamos informações sobre sua atividade ou atividade em dispositivos associados a você em nosso <i>website</i>, plataforma, aplicativos ou dispositivos usando tecnologias de rastreamento <i>cookies</i>. <i>Cookies</i> são arquivos de texto adicionados ao seu dispositivo eletrônico que nos auxiliam na análise de como os usuários em geral estão utilizando os nossos serviços e como melhorá-los, aplicados ao marketing e nos procedimentos de análise. O uso de <i>cookies</i> é padrão na internet. Embora a maior parte dos navegadores da <i>web</i> aceitem automaticamente, a decisão de autorizar ou negar é sua. Para gerenciamento de suas próprias configurações, personalizando a sua experiência por meio da seleção (desabilitação) de <i>cookies</i>, favor visite <b><i>Política de Cookies</i></b> ou acesso nosso <b><i>Banner</i> LGPD</b>;</p>
              <p><b>●	Outras tecnologias de rastreamento:</b> nós, e determinados parceiros, coletamos informações sobre sua atividade ou ações em dispositivos associados a você em nosso <i>website</i>, plataforma, aplicativos e dispositivos usando outras tecnologias de rastreamento. O uso dessas outras tecnologias de rastreamento é padrão na internet. Embora a maior parte dos navegadores da <i>web</i> aceitem automaticamente, a decisão de autorizar ou negar é sua. Para gerenciamento de suas próprias configurações, personalizando a sua experiência por meio da seleção (desabilitação) de <i>cookies</i>, favor visite <b><i>Política de Cookies</i></b>;</p>
            </div>
            <p><b>●	Por meio do uso de ferramentas analíticas:</b> nós, e determinados parceiros, geramos informações complementares sobre sua atividade ou atividade em dispositivos associados a você em nosso <i>website</i>, plataforma, aplicativos ou dispositivos. Nestas situações exige-se consentimento específico, podendo ser revogado a qualquer tempo utilizando nosso <b><i>Canal de Comunicação do Usuário</i></b>, disponível por meio do e-mail <a href="mailto:lgpd@napoleon.com.br">lgpd@napoleon.com.br</a>;</p>
            <p><b>●	Por meio do registro, cadastro e/ou geração de conta:</b> nós coletamos suas informações disponibilizadas por você quando do fazimento do seu registro, cadastro ou conta, inclusive quando você vincula seu perfil em um <i>website</i> ou plataforma de terceiros com a sua conta de registro, podendo incluir o seguinte: detalhes de registro, nome de utilizador, endereço de e-mail, palavra-passe, pergunta de segurança e, caso aplicável, informações de pagamento;</p>
            <p><b>●	Por meio da tomada de serviços do nosso <i>website</i>:</b> nós coletamos suas informações disponibilizadas por você quando da tomada de serviços disponibilizados no nosso <i>website</i>, como no caso da participação de fóruns públicos ou outras atividades, responde a pesquisas, quando visita nossos espaços físicos, liga para as centrais de atendimento ou interage conosco de outras formas por meio de um ou mais dispositivos, seja por digitação ou comando de voz;</p>
            <p><b>●	Por meio da contratação de nossos serviços ou produtos:</b> nós coletamos suas informações disponibilizadas por você quando da contratação dos nossos serviços ou produtos disponibilizados no nosso <i>website</i> ou nos demais canais de relacionamento (aplicativos móveis, etc.), quando visita nossos espaços físicos, liga para as centrais de atendimento ou interage conosco de outras formas por meio de um ou mais dispositivos, seja por digitação ou comando de voz;</p>
            <div style={{marginLeft: "3rem"}}>
              <p><b>●	Coleta via aplicativo:</b> quando você transfere ou utiliza um aplicativo móvel da <b>NAPOLEON</b>, este pode gravar certas informações (incluindo estatísticas de uso do aplicativo, tipo de dispositivo, sistema operativo, definições do aplicativo, endereço IP, definições de idioma, datas e horas de ligação ao aplicativo, dados de localização e outras informações de comunicações técnicas), algumas ou todas na condição de dados pessoais. Pode ocorrer de um determinado aplicativo ter sua própria Política de Privacidade, com informações mais específicas, devendo ser lido antes da sua utilização;</p>
            </div>
            <p><b>●	Por meio dos nossos canais de comunicação:</b> nós coletamos suas informações disponibilizadas por você quando do seu contato com nossos canais de comunicação, seja pessoalmente, por correio, por telefone, <i>on-line</i>, por comunicação eletrônica ou por qualquer outro meio;</p>
            <p><b>●	Por meio de terceiros:</b> sempre provenientes de fontes confiáveis e idôneas, exclusivamente para fins de conferência e/ou confirmação de alguns dados pessoais, como no caso da validação do endereço postal por serviços de terceiros, por exemplo. Também quando envolver determinadas funcionalidades do <i>website</i> da <b>NAPOLEON</b> que dependam de terceiros, como nas mídias sociais. Nesta ou em outras situações idênticas exige-se consentimento específico, podendo ser revogado a qualquer tempo utilizando nosso <b><i>Canal de Comunicação do Usuário</i></b>, por meio do e-mail <a href="mailto:lgpd@napoleon.com.br">lgpd@napoleon.com.br</a>;</p>
            <p><b>●	AVISO DE DESTAQUE:</b></p>
            <div style={{marginLeft: "3rem"}}>
              <p>●	Em circunstâncias especiais, você pode acabar fornecendo dados pessoais de terceiros conosco, como no caso da menção de outro cliente/consumidor, sendo necessário garantir que esta divulgação não viola os direitos dos terceiros em questão. Caso não tiver certeza da concordância de terceiro no compartilhamento dos seus dados pessoais, não comunique esses dados pessoais à <b>NAPOLEON</b>;</p>
            </div>
            <p><b>●	Por meio de fontes oficiais:</b> nós coletamos suas informações disponíveis em <i>websites</i> públicos, como diários oficiais, tribunais, salas de imprensa de órgãos públicos e legislação, bem como provenientes de autoridades públicas, caso necessário.</p>
          </div>

          <br />
          <p><b>Parte 4: Quais as finalidades (propósitos) dos dados pessoais coletados</b></p>
          <br />
          <p>A <b>NAPOLEON</b>, nas relações de consumo e comerciais, realiza o tratamento dos seus dados pessoais objetivando as seguintes finalidades:</p>
          <div>
            <p>●	Disponibilizar o seu acesso às funcionalidades do nosso <i>website</i>, plataforma, aplicativos, dispositivos ou outros serviços atrelados, exibindo os conteúdos buscados e quaisquer personalizações que possa selecionar;</p>
            <p>●	Auxiliar na verificação de contas, atividades e qualquer outra ação ou movimentação para proporcionar segurança dentro e fora do <i>website</i>, plataforma, aplicativos, dispositivos ou dos serviços vinculados, especialmente na verificação da sua identidade, investigando atividades suspeitas ou violações aos termos desta <b><i>Política de Privacidade</i></b> e aos demais documentos de regramento, sempre no combate à fraude e outras atividades ilegais;</p>
            <p>●	Efetuar o seu cadastro, inclusive para a participação de promoções, descontos, eventos e outras atividades afins quando pertinente, com confecção materiais de identificação e/ou promocionais;</p>
            <p>●	Permitir a comunicação com você, nosso usuário, e o envio de avisos referentes ao <i>website</i>, plataforma, aplicativos, dispositivos ou serviços vinculados, em especial sobre a administração da(s) sua(s) conta(s) e funcionalidades atreladas;</p>
            <p>●	Informar sobre alterações do nosso <i>website</i>, plataforma, aplicativos, dispositivos ou serviços vinculados;</p>
            <p>●	Gerar análises estatísticas, por meio da correlação e do cruzamento de dados (pessoais ou não), sobre os modos de uso do nosso <i>website</i>, plataforma, aplicativos, dispositivos ou serviços vinculados, de maneira que se possa monitorar, adaptar, atualizar, operar, avaliar, proteger e melhorar os relacionamentos a partir da melhor compreensão das suas necessidades e interesses, bem como nossos produtos e serviços oferecidos, inclusive para a administração de conteúdo;</p>
            <p>●	Compartilhar informações com outras plataformas, produtos e serviços com nossos parceiros, terceiros ou daqueles que fazem parte do grupo econômico da <b>NAPOLEON</b> ou dos quais se pretende pertencer ou venha a pertencer, beneficiando-o, nosso usuário, por meio do aperfeiçoamento e/ou inclusão de novos serviços a serem incorporados, sempre de maneira coordenada para evitar quaisquer prejuízos;</p>
            <p>●	Enviar material de marketing ou concursos da <b>NAPOLEON</b>, a partir do seu consentimento específico no <b><i>Banner</i> LGPD</b> ou em outro documento de controle paralelo, com aproveitamento do cenário em campanhas publicitárias, <i>newsletters</i>, sendo-lhe oferecidos produtos ou serviços e/ou anunciadas promoções, sorteios, concursos, convites para participação de pesquisas, por meio de e-mail, SMS, telefonemas ou WhatsApp ou seu equivalente, cujas preferências e continuidade da participação poderão ser realizadas diretamente nos e-mails recebidos, clicando na opção desejada;</p>
            <p><b>●	AVISO DE DESTAQUE:</b></p>
            <div style={{marginLeft: "3rem"}}>
              <p>●	Mesmo que cancele as comunicações de marketing ou de publicidade, poderemos continuar a lhe contatar para conferir instruções, permitir que faça as compras que solicita, administrar a sua conta ou outras ações compatíveis com a legislação vigente.</p>
            </div>
            <p>●	Aprimorar as iniciativas comerciais e promocionais da <b>NAPOLEON</b> e proporcionar experiências personalizadas para você por meio de ferramentas analíticas, nosso usuário, por meio do envio de mensagens sobre novos serviços, publicidade, promoções ou outras formas de marketing;</p>
            <p>●	Nas relações de consumo, promover avaliação de crédito, prevenção de fraude, como nos casos de validação de identidade para atendimento ao titular, e aplicação de termos e condições dos produtos e serviços, conforme os interesses da <b>NAPOLEON</b>, casos em que serão avaliados os interesses comerciais da questão para garantir que estes não se sobreponham aos direitos do usuário, titular de dados pessoais;</p>
            <p>●	Nas relações de consumo, atender às solicitações de demanda ou de queixas, aprimorando os produtos e serviços: para processar os pedidos de aquisição, fornecer o produto ou serviço solicitado (realizar <i>recall</i>, enviar mensagens, utilizar carro conectado, etc.), emitir a nota fiscal ou sua fatura com base na utilização dos serviços, etc.;</p>
            <p>●	Nas relações comerciais, atender às suas solicitações, aprimorando os produtos e serviços: para processar os pedidos de aquisição, fornecer o produto ou serviço solicitado (realizar <i>recall</i>, enviar mensagens, utilizar carro conectado, etc.), emitir a nota fiscal ou sua fatura com base na utilização dos serviços e outras atividades afins;</p>
            <p>●	Nas relações comerciais, facilitar o relacionamento comercial com os fornecedores;</p>
            <p>●	Nas relações comerciais, permitir o estabelecimento de novas parcerias, sempre com o intuito de aprimorar os serviços oferecidos a você, nosso usuário;</p>
            <p>●	Nas relações de consumo e comerciais, cumprir exigências legais e regulatórias, em especial as regras contábeis e fiscais, bem como da legislação e de regulações setoriais, como, por exemplo, nas hipóteses de retenção de informações para fins de <i>recall</i> de produto, emissão de documentos fiscais ou para prestação de contas à Autoridade Nacional de Proteção de Dados - ANPD;</p>
            <p>●	Desenvolver estudos sobre seus interesses, comportamentos e demografia dos usuários em geral para fornecimento e personalização dos nossos serviços, melhorando do modo contínuo a experiência de navegação de todos os nossos usuários em nosso <i>website</i>, plataforma, aplicativos e dispositivos;</p>
            <p>●	Compartilhar informações com parceiros e/ou terceiros, na medida do necessário apenas, com o intuito de viabilizar o melhor acesso e uso do nosso <i>website</i>, plataforma, aplicativos, dispositivos ou serviços vinculados, respeitando os limites estabelecidos na legislação vigente;</p>
            <p>●	Fornecer, para fins estatísticos, à <b>NAPOLEON</b> dados anonimizados (que não permitem a sua identificação de usuário) coletados sobre clientes, vendas, tipos de produto e informações de exercícios do nosso <i>website</i> a terceiros confiáveis e idôneos;</p>
            <p>●	Permitir auditoria legal para fins de operações societárias, como fusão, aquisição ou venda de todos os ativos da <b>NAPOLEON</b>, nosso grupo econômico (quando existente) ou de parte de cada um deles, e transferir as informações para o novo proprietário, caso o novo controlador (total ou parcial) ou seus ativos sejam alterados;</p>
            <p>●	Responder às suas solicitações, pedidos e requerimentos de assistência e necessidades de apoio;</p>
            <p>●	Responder as ordens/solicitações judiciais e administrativas de qualquer tipo, caso em que incumbirá à <b>NAPOLEON</b> analisar se é necessário fazê-lo para atender as premissas principiológicas maiores ou, ao contrário, cabe contestá-las a partir dos parâmetros jurídicos para, conforme resultado, abster-se ou atendê-las em definitivo;</p>
            <p>●	Exercer, proteger e/ou reivindicar direitos legais da <b>NAPOLEON</b>;</p>
            <p>●	Outros fins, na forma e nos limites do consentimento correspondente concedido por você, nosso usuário, quando necessário e sempre no limite do que for permitido ou exigido pela lei.</p>
          </div>

          <br />
          <p><b>Parte 5: Quais as bases legais para o tratamento de dados pessoais</b></p>
          <br />
          <p>O rol completo de hipóteses legais para o tratamento de dados pessoais encontra-se elencada na Lei Federal nº 13.709, de 14 de agosto de 2018 (Lei Geral de Proteção de Dados Pessoais – LGPD), variando conforme os diferentes tipos de dados pessoais. Com relação ao tratamento de dados pessoais praticado pela <b>NAPOLEON</b> e prevista nesta <b><i>Política de Privacidade</i></b>, nossas bases legais utilizadas podem variar entre:</p>
          <div>
            <p>●	Consentimento fornecido por você, nosso usuário, sempre que necessário;</p>
            <p>●	Procedimentos preliminares dos contratos (a seu pedido);</p>
            <p>●	Execuções de contratos em que você faça parte;</p>
            <p>●	Exercício regular de direitos em processo judicial, administrativo ou arbitral;</p>
            <p>●	Legítimo interesse, o que inclui, por exemplo, nossos interesses de operação dos nossos negócios, no fornecimento de bens e serviços a você, no alerta de outros produtos ou serviços que possam vir a ser do seu interesse, manter ou melhorar os nossos produtos ou serviços, sem que para isso implique risco indevido aos seus direitos, liberdades ou interesses;</p>
            <p>●	Prevenção à fraude para sua segurança; </p>
            <p>●	Proteção da sua vida ou da sua incolumidade física ou de terceiro;</p>
            <p>●	Cumprimento das obrigações legais e/ou regulatórias; e,</p>
            <p>●	Qualquer outra base jurídica legal prevista na legislação vigente, caso necessário e/ou pertinente.</p>
          </div>
          
          <br />
          <p><b>Parte 6: Casos de compartilhamento dos dados pessoais, transferência internacional de dados pessoais e as obrigações dos parceiros e terceiros</b></p>
          <br />
          <div>
            <p><b>●	Casos de compartilhamento dos dados pessoais</b></p>
            <p>A <b>NAPOLEON</b>, declara, para todos os fins, <b>não comercializar, ceder, trocar ou alugar dados pessoais</b>. O compartilhamento existente dos seus dados pessoais coletados no nosso <i>website</i>, plataforma, aplicativos, dispositivos ou serviços vinculados com outras empresas do nosso grupo, com prestadores de serviços, parceiros, terceiros, órgãos reguladores, fiscalizadores e, claro, com nossos destinatários internos (funcionários, gestores de negócios, operadores, etc.) e externos (revendedores, gestores de negócios, operadores, etc.) será sempre dentro dos limites desta <b><i>Política de Privacidade</i></b> e da legislação vigente e dos limites da necessidade razoável, com vista à execução das atividades supra referidas na Parte 4 e também para:</p>
            <div style={{marginLeft: "3rem"}}>
              <p>●	Permitir a gestão e operação dos nossos negócios, operação do <i>website</i>, plataforma, aplicativos ou dispositivos, fornecimento de produtos ou serviços selecionados, como também para fins de administração de atividades (envio de boletins informativos, inquéritos, pagamentos, etc.), sempre em sintonia com os fins estabelecidos na presente <b><i>Política de Privacidade</i></b>;</p>
              <p>●	Viabilizar e aprimorar a prestação dos nossos produtos e serviços, sendo que nestes casos o tratamento de dados pessoais ocorrerá em conformidade com os termos desta <b><i>Política de Privacidade</i></b>, e com os mesmos níveis de segurança nela indicados;</p>
              <p>●	Auxiliar no oferecimento ou na operação do nosso <i>website</i>, plataforma, aplicativos, dispositivos ou serviços vinculados, por vezes compartilhando informações demográficas agregadas com os nossos parceiros de negócios, afiliadas de confiança e anunciantes para os fins descritos na presente <b><i>Política de Privacidade</i></b>;</p>
              <p>●	Permitir que parceiros e terceiros possam realizar atividade de marketing, gestão de campanhas de marketing, enriquecimento de base de dados e armazenamento em nuvem análises de marca ou direcionamento de publicidade com base em interesses ou atividades similares para a <b>NAPOLEON</b>, sempre que autorizado no <b><i>Banner</i> LGPD</b> ou em outro documento de controle paralelo;</p>
              <p>●	Possibilitar que parceiros ou terceiros possam desenvolver promoções e ações conjuntas (hipótese em que será adquirido um produto ou serviço de terceiro por meio dos canais de relacionamento da <b>NAPOLEON</b>), sempre que autorizado no <b><i>Banner</i> LGPD</b> ou em outro documento de controle paralelo;</p>
              <p>●	Permitir que parceiros ou terceiros especializados na avaliação de crédito possam atuar, seja na autenticação, prevenção a fraudes e proteção ao crédito em geral, sempre que autorizado no <b><i>Banner</i> LGPD</b> ou em outro documento de controle paralelo;</p>
              <p>●	Analisar e solucionar problemas técnicos, relacionados a fraudes e à segurança do nosso <i>website</i>, plataforma, aplicativos, dispositivos e dos serviços vinculados da <b>NAPOLEON</b>;</p>
              <p>●	Gerar e divulgar estatísticas anonimizados de maneira pública (ex.: em redes sociais, na mídia ou junto a parceiros comerciais), podendo incluir informações, dados e tendências demográficas oriundos dos seus dados pessoais, os quais serão divulgados de maneira agregada e anônima;</p>
              <p>●	Permitir o acesso a dados pessoais disponibilizados de maneira pública, como (i) dados do seu perfil de usuário de rede social, compartilhados com motores de busca, plataformas, aplicativos e dispositivos, (ii) suas notícias, artigos ou modelos de peças processuais publicadas, e interagem com documentos, por meio de comentários e votações, e (iii) seus dados pessoais presentes em documentos obtidos de fontes oficiais;</p>
              <p>●	Mediante respectiva autorização sua, nosso usuário, nos demais casos nos quais venha surgir a necessidade de compartilhamento dos seus dados pessoais, nos limites da legislação vigente e com altos níveis de segurança;</p>
              <p>●	Permitir auditoria legal para fins de operações societárias, como fusão, transferência, aquisição ou venda de todos os ativos da <b>NAPOLEON</b>, seu grupo econômico ou de parte de cada um deles, inclusive de maneira prévia ao potencial comprador, adquirente ou seus representantes (neste caso, desde que tomadas as devidas medidas para garantia da segurança e a confidencialidade dos seus dados pessoais) e, ainda, transferir as informações para o novo proprietário, caso a propriedade ou o controle total ou parcial da <b>NAPOLEON</b>, ou seus ativos, sejam alterados;</p>
              <p>●	Responder a solicitações judiciais e administrativas e cumprir requisitos das legislações aplicáveis, situações nas quais os dados poderão ser compartilhados pela <b>NAPOLEON</b> com autoridades policiais órgãos governamentais autoridades reguladoras, tribunais e outras autoridades públicas, quando obrigados ou autorizados, nos termos da legislação vigente;</p>
              <p>●	Nestas previsões finais: (i) na medida do necessário para estabelecer, exercer ou defender reivindicações legais; (ii) caso exigido por leis ou regulamentos aplicáveis; (iii) em resposta a pedidos de agências governamentais e autoridades policiais; (iv) quando necessária ou apropriada a divulgação para evitar danos físicos ou prejuízo financeiro significativo; e (v) para fins de investigação de atividades ilegais;</p>
              <p><b>●	AVISO DE DESTAQUE:</b></p>
              <div style={{marginLeft: "3rem"}}>
                <p>●	É possível que a <b>NAPOLEON</b> recorra à subcontratação de empresas para a realização do tratamento total ou parcial dos seus dados pessoais, nos termos permitidos pela Lei Federal nº 13.709, de 14 de agosto de 2018 (Lei Geral de Proteção de Dados Pessoais – LGPD), hipótese em que todas ficarão obrigadas nos termos dos contratos celebrados, a guardar sigilo e a garantir a privacidade e a segurança dos dados pessoais a que tiverem acesso, não podendo utilizar esses dados para quaisquer outros fins, nem os relacionar com outros dados que possuam;</p>
                <p>●	Poderão ser encontradas publicidades ou outros conteúdos em nosso <i>website</i>, aplicativo, dispositivo ou serviços vinculados que possam conduzi-lo a <i>websites</i> ou serviços de parceiros, fornecedores, anunciantes, patrocinadores, licenciadores e outros terceiros relacionados com a <b>NAPOLEON</b>. Hipótese em que não iremos controlar o conteúdo e nem as conexões que aparecem nestes <i>websites</i> ou serviços externos, não sendo responsáveis pelas práticas utilizadas, devendo serem observadas respectivas políticas de privacidade e termos de utilização. Dentro do possível, serão exigidos desses externos a observância de todas as medidas de segurança, atreladas a celebração de acordos com cláusulas contratuais específicas para esta finalidade, vinculadas às garantias previstas na legislação aplicável, de modo a proporcionar o alto nível de proteção aos dados pessoais.</p>
              </div>
            </div>
            <p><b>●	Transferência internacional de dados pessoais</b></p>
            <div style={{marginLeft: "3rem"}}>
              <p>●	Caso a <b>NAPOLEON</b> precise enviar as suas informações para fora do Brasil em operações padrões (casos listados antes), adotaremos medidas de segurança necessárias, bem como iremos assegurar que estas transferências ocorram mediante a celebração de acordos com cláusulas contratuais específicas para esta finalidade ou demais garantias previstas na legislação aplicável, especialmente caso o país destinatário dos dados não proporcione um alto nível de proteção de dados pessoais adequado ao previsto na legislação brasileira;</p>
              <p>●	Nos casos de utilização de serviços computacionais em nuvem para processamento ou armazenamento de dados localizados fora do Brasil, também em outras operações computacionais ou comerciais globais, a <b>NAPOLEON</b> sempre tomará as medidas cabíveis para proteção dos seus dados e privacidade, atendendo a legislação nacional vigente, bem como das demais legislações dos outros países envolvidos;</p>
              <p>●	Para essas operações acima descritas basta a sua concordância com esta <b><i>Política de Privacidade</i></b>. Contudo, para outras operações específicas que envolvam a transferência internacional de dados pessoais exige-se consentimento específico, podendo ser revogado a qualquer tempo utilizando nosso <b><i>Canal de Comunicação do Usuário</i></b>io do e-mail <a href="mailto:lgpd@napoleon.com.br">lgpd@napoleon.com.br</a>.</p>
            </div>
            <p><b>●	As obrigações dos parceiros e terceiros</b></p>
            <p>A <b>NAPOLEON não comercializa, troca ou aluga dados pessoais</b>. Os compartilhamentos de dados pessoais, quando existentes, limitam-se às hipóteses antes listadas,</p>
          </div>

          <br />
          <p><b>Parte 7: Seus direitos, mecanismos de autogerenciamento (controles e escolhas) no <i>Banner</i> LGPD e detalhamento dos controles e escolhas:</b></p>
          <br />
          <p>Fornecemos a você, nosso usuário, a capacidade de exercer os seus direitos previstos na LGPD. Para tanto, basta encaminhar a sua solicitação/requerimento por meio do nosso <b><i>Canal de Comunicação do Usuário</i></b>, por meio do e-mail <a href="mailto:lgpd@napoleon.com.br">lgpd@napoleon.com.br</a>. Teremos a satisfação em recebê-la, garantindo que as premissas ou valores desta <b><i>Política de Privacidade</i></b> sejam observadas, tendo a certeza de que a sua privacidade esteja resguardada em todos os sentidos.</p>
          <p>Fornecemos a você, nosso usuário, a capacidade de exercer sua autogestão de relacionamento por meio do <b><i>Banner</i> LGPD</b> e <b><i>Check Box</i></b> quando o assunto é o exercício de direitos previstos na LGPD. Para tanto, enumeramos direitos, apontando os mecanismos de auto gerenciamento que permitem controles e escolhas, bem como indicamos o <b><i>Banner</i> LGPD</b>, tudo para garantir que as premissas ou valores desta <b><i>Política de Privacidade</i></b> sejam observadas, tendo a certeza de que a sua privacidade esteja resguardada em todos os sentidos.</p>
          <div>
            <p><b>●	Direitos:</b> adotamos o roteiro <b><i>ARCO!</i></b> para melhor visualização e compreensão de todos os direitos estabelecidos na legislação vigente, compreendendo:</p>
            <div style={{marginLeft: "3rem"}}>
              <p><b>●	A – Acesso</b> aos seus dados pessoais objeto de tratamento por nós;</p>
              <p><b>●	R – Restrição</b> abrangendo <b>Anonimização, Bloqueio</b> ou a <b>Eliminação(1)</b> dos seus dados pessoais desnecessários, excessivos ou tratados em desconformidade, e, ainda, a <b>Eliminação(2)</b> dos dados pessoais desprovidos de consentimento, quando for o caso;</p>
              <p><b>●	R – Retificação</b> ou correção dos seus dados pessoais incompletos, inexatos ou desatualizados;</p>
              <p><b>●	R – Revogação</b> do consentimento a qualquer momento mediante manifestação expressa, sempre de forma gratuita e facilitada;</p>
              <p><b>●	R – Revisão</b> das decisões tomadas por nós unicamente com base no tratamento automatizado de dados pessoais que afetem seus interesses;</p>
              <p><b>●	C – Cancelamento</b> ou eliminação dos seus dados pessoais após o término do seu tratamento de dados pessoais, ressalvadas as hipóteses de guarda obrigatória de registros previstas na legislação vigente e nos demais casos previstos em lei;</p>
              <div style={{marginLeft: "3rem"}}>
                <p>●	Atenção: não confundir <b>Cancelamento</b> com <b>Direito de Esquecimento</b>, afinal este último não está previsto na legislação brasileira e não está ao alcance da <b>NAPOLEON</b>;</p>
              </div>
              <p><b>●	O – Oposição</b> contra o tratamento dos seus dados pessoais quando apoiado numa das hipóteses de dispensa de consentimento;</p>
              <p><b>●	O – Portabilidade</b> ou transmissão dos seus dados pessoais tratados por nós a outro prestador de serviço ou produto;</p>
              <p><b>●	!  – Informação(1)</b> confirmando a existência do tratamento dos seus dados pessoais;</p>
              <p><b>●	! – Informação(2)</b> das entidades públicas e privadas com compartilhamento dos seus dados pessoais;</p>
              <p><b>●	! – Informação(3)</b> quanto às possibilidades de negativa de consentimento e suas consequências;</p>
              <p><b>●	! – Informação(4)</b> no caso de alteração de finalidade, forma e duração do tratamento, identificação do controlador e do Encarregado e do uso compartilhado dos dados pessoais.</p>
            </div>
            <p><b>●	Mecanismos de autogerenciamento:</b> suas decisões, suas escolhas, abrangendo:</p>
            <div style={{marginLeft: "3rem"}}>
              <p><b>●	<i>Cookies Banners</i>:</b> previstos dentro do <b><i>Banner</i> LGPD</b>, com indicação de funcionalidades e finalidades em relação aos <i>cookies</i> adotados ou descartados;</p>
              <p><b>●	<i>Outras tecnologias de rastreamento</i>:</b> previstos dentro do <b><i>Banner</i> LGPD</b>, com indicação de funcionalidades e finalidades em relação às outras tecnologias de rastreamento adotadas ou descartadas;</p>
              <p><b>●	<i>Global Positioning System</i> (GPS):</b> trata-se das informações enviadas pelo dispositivo móvel utilizado para fins de detecção da sua localização, a qual exige autorização específica no <b><i>Check Box</i></b>, podendo ser revogado (quando existente) a qualquer tempo utilizando nosso <b><i>Canal de Comunicação do Usuário</i></b>, por meio do e-mail <a href="mailto:lgpd@napoleon.com.br">lgpd@napoleon.com.br</a>;</p>
              <p><b>●	Dados pessoais provenientes de coligados/terceiros:</b> trata-se dos dados pessoais coletados fora dos canais e ambientes da <b>NAPOLEON</b> por parceiros/terceiros, requerendo consentimento específico no <b><i>Check Box</i></b>, podendo ser revogado (quando existente) a qualquer tempo utilizando nosso <b><i>Canal de Comunicação do Usuário</i></b>, por meio do e-mail <a href="mailto:lgpd@napoleon.com.br">lgpd@napoleon.com.br</a>;</p>
              <p><b>●	Dados pessoais provenientes de conta em rede social:</b> caso você realize seu cadastro por meio de uma conta em rede social, privada ou pública, exige-se consentimento específico no <b><i>Check Box</i></b>, podendo ser revogada (quando existente) a qualquer tempo utilizando nosso <b><i>Canal de Comunicação do Usuário</i></b>, por meio do e-mail <a href="mailto:lgpd@napoleon.com.br">lgpd@napoleon.com.br</a>;</p>
              <p><b>●	Informações provenientes de ferramentas analíticas:</b> trata-se das informações complementares sobre sua atividade ou atividade em dispositivos associados a você em nosso <i>website</i>, plataforma, aplicativos ou dispositivos, exigindo-se consentimento específico no <b><i>Check Box</i></b>, podendo ser revogado (quando existente) a qualquer tempo utilizando nosso <b><i>Canal de Comunicação do Usuário</i></b>, por meio do e-mail <a href="mailto:lgpd@napoleon.com.br">lgpd@napoleon.com.br</a>;</p>
              <p><b>●	Informações provenientes de terceiros:</b> trata-se das informações de conferência e/ou confirmação de alguns dados pessoais ou de validação das funcionalidades do <i>website</i> da <b>NAPOLEON</b> que dependam de terceiros, exigindo-se consentimento específico no <b><i>Check Box</i></b>, podendo ser revogado (quando existente) a qualquer tempo utilizando nosso <b><i>Canal de Comunicação do Usuário</i></b>, por meio do e-mail <a href="mailto:lgpd@napoleon.com.br">lgpd@napoleon.com.br</a>;</p>
              <p><b>●	Operações específicas de transferência internacional de dados pessoais:</b> trata-se daquelas que extrapolam a transferência de dados pessoais padrão, exigindo-se consentimento específico no <b><i>Check Box</i></b>, podendo ser revogado (quando existente) a qualquer tempo utilizando nosso <b><i>Canal de Comunicação do Usuário</i></b>, por meio do e-mail <a href="mailto:lgpd@napoleon.com.br">lgpd@napoleon.com.br</a>.</p>
            </div>
            <p><b>●	Resumo dos controles e escolhas:</b> a partir dos instrumentos acima descritos, fornecemos a você, nosso usuário, a capacidade de exercer certos controles e escolhas em relação à nossa coleta, uso e compartilhamento de suas informações. Confira a seguir um resumo exemplificativo dessas possibilidades:</p>
            <div style={{marginLeft: "3rem"}}>
              <p>●	Escolher ou alterar suas escolhas para assinaturas, boletins informativos e alertas;</p>
              <p>●	Escolher se receberá ou não ofertas e promoções de nossos produtos e serviços, ou produtos e serviços que acreditamos ser de seu interesse;</p>
              <p>●	Controlar publicidade segmentada de muitas redes de anúncios e parceiros, trocas de dados, análises de marketing e provedores de serviço de publicidade e marketing digital, visitando:</p>
              <div style={{marginLeft: "3rem"}}>
                <p>●	O <i>website</i> do Conselho Nacional de Autorregulamentação Publicitária – CONAR (Brasil);</p>
                <p>●	O <i>website</i> da European Interactive Digital Advertising Alliance – EDAA (Europa);</p>
                <p>●	O <i>website</i> da Digital Advertising Alliance – DAA (EUA).</p>
              </div>
              <p>●	Optar por controlar a publicidade segmentada a ser recebida nos aplicativos e dispositivos usando as configurações e escolhas disponibilizadas a você por meio de seu(s) dispositivo(s), por exemplo, redefinindo o identificador de publicidade do dispositivo e/ou desativando os anúncios com base em interesses;</p>
              <p>●	Escolher limitar sua participação nas práticas gerais de medição digital, quando existente; e,</p>
              <p>●	Solicitar a remoção de suas informações pessoais de um fórum público em nosso <i>website</i>, plataforma, aplicativos ou dispositivos.</p>
            </div>
          </div>

          <br />
          <p><b>Parte 8: Segurança, armazenamento e exclusão dos dados pessoais</b></p>
          <br />
          <p><b>Segurança dos dados pessoais e da privacidade:</b> nós, da <b>NAPOLEON</b>, empenhamo-nos na tomada de medidas administrativas, técnicas e físicas de cunho preventivo em relação à segurança e privacidade durante a execução de suas atividades envolvendo dados pessoais, desde o treinamento e conscientização dos colaboradores, até o uso de tecnologias de criptografia e <i>firewall</i> avançadas. Com isso busca-se proteger os dados pessoais contra acessos não autorizados, situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou qualquer forma de tratamento inadequado ou ilícito, razão pela qual as nossas práticas relacionadas à segurança da informação serão norteadas pela legislação aplicável, pelas melhores práticas do mercado (<i>data centers</i> localizados no Brasil ou no exterior) e por nossas políticas internas relacionadas ao tema.</p>
          <div>
            <p><b>●	AVISO DE DESTAQUE:</b></p>
            <div style={{marginLeft: "3rem"}}>
              <p>●	É importante saber que nenhum <i>website</i>, plataforma, aplicativos, dispositivos ou serviços vinculados (todos disponíveis no meio virtual) são completamente seguros, mesmo que todas as medidas de segurança conhecidas e possíveis sejam adotadas. Por isso, surgindo preocupação ou suspeita de risco dos seus dados pessoais, por favor, entre em contato conosco pelo nosso <b><i>Canal de Comunicação do Usuário</i></b>, por meio do <a href="mailto:lgpd@napoleon.com.br">lgpd@napoleon.com.br</a> ou, em última instância, para nosso <b><i>Canal de Comunicação com o Encarregado</i></b>, por meio do <a href="mailto:encarregado@actatechlaw.com.br">encarregado@actatechlaw.com.br</a>;</p>
              <p>●	Você, nosso usuário, é responsável por manter suas credenciais de acessos ao nosso <i>website</i>, plataforma, aplicativos, dispositivos ou serviços vinculados de maneira seguras e confidenciais, devendo manter uma rotina de alteração frequente das suas credenciais de acesso, notificando-nos imediatamente caso tomar conhecimento de qualquer utilização indevida das suas credenciais de acesso;</p>
              <p>●	Caso nosso <i>website</i>, plataforma, aplicativos, dispositivos ou serviços vinculados possuírem ligações com <i>websites</i> de parceiros, é possível que durante sua navegação você seja direcionado a esses <i>websites</i>. Nesses casos, exigimos desses parceiros total adequação à legislação vigente e aplicada à proteção dos dados pessoais e privacidade, mas a responsabilidade sobre a segurança e proteção dos seus dados pessoais caberá aos referidos terceiros, de forma que recomendamos a leitura dos termos de uso, políticas de privacidade e de cookies dos respectivos <i>websites</i>. Este cenário também se aplica às hipóteses em que você venha a divulgar seus dados pessoais em <i>plug-ins</i> sociais e <i>websites</i> de busca. Nesses casos, o tratamento dos dados será realizado pelos terceiros em questão e, novamente, sugerimos a leitura dos documentos legais destes respectivos <i>websites</i>/terceiros.</p>
              <div style={{marginLeft: "3rem"}}>
                <p><b>●	Compromisso:</b> Nós, da <b>NAPOLEON</b>, comprometemo-nos a firmar parcerias com empresas e/ou entidades que empreguem alto nível de segurança no armazenamento dos dados pessoais, estabelecendo contratos que não violam os termos desta <b><i>Política de Privacidade</i></b>.</p>
              </div>
            </div>
            <p><b>●	Armazenamento dos dados pessoais:</b> todas as informações fornecidas por você, nosso usuário, serão armazenadas de forma segura e íntegra, em ambiente controlado, monitorado e de segurança. O período de retenção respeitará as finalidades vinculadas a cada dado pessoal (vide Parte 4 e 6), segundo <b>Critérios de Temporalidade</b> estabelecido internamente, baseados nos termos da legislação aplicável e acessível mediante solicitação pelo e-mail <a href="mailto:lgpd@napoleon.com.br">lgpd@napoleon.com.br</a>. Também é possível a retenção dos seus dados pessoais em razão do seu consentimento, pelo período em que você permitir e para casos específicos. As informações obtidas serão consideradas sigilosas e somente serão acessadas por pessoas autorizadas pela <b>NAPOLEON</b> e capacitadas para lhes conferir o tratamento mais adequado;</p>
            <div style={{marginLeft: "3rem"}}>
              <p><b>●	Compromisso:</b> a <b>NAPOLEON</b> compromete-se a reter os dados pessoais somente tempo em que forem necessários para o alcance das finalidades lícitas, leais, específicas e informadas;</p>
              <p><b>●	Compromisso:</b> a <b>NAPOLEON</b> permite que os seus dados pessoais sejam acessados pelos nossos colaboradores ou parceiros apenas no limite do necessário para executarem suas atividades, de acordo com as previsões expressas estabelecidas nesta <b><i>Política de Privacidade</i></b>, sempre mediante obrigação contratual de confidencialidade dos dados pessoais tratados;</p>
              <p><b>●	Dados pessoais de pessoa falecida:</b> quando desprovidos de instruções claras sobre a administração dos dados pessoais, poderemos contatar familiares diretos e representantes para remoção dos dados pessoais, podendo fornecer, em determinadas circunstâncias, informações razoáveis sobre os dados da pessoa falecida retidos pela <b>NAPOLEON</b> aos beneficiários da pessoa falecida, o que não inclui palavras-passe ou outros detalhes de <i>login</i>.</p>
            </div>
            <p><b>●	Exclusão dos dados pessoais:</b> como explicado acima, vamos reter seus dados pessoais somente pelo tempo necessário para atendimento das finalidades previstas nesta <b><i>Política de Privacidade</i></b> e na legislação aplicável, bem como para atender determinações legais (cumprimento de obrigação legal ou regulatória) ou ordens judiciais e administrativas. Entretanto, excetuadas essas hipóteses, você mesmo poderá optar pela exclusão dos seus dados pessoais da nossa base. Para o autogerenciamento no exercício dos seus direitos Vide Parte 7 ou leia as opções abaixo:</p>
            <div style={{marginLeft: "3rem"}}>
              <p><b>●	Eliminação(1)</b> dos seus dados pessoais desnecessários, excessivos ou tratados em desconformidade;</p>
              <p><b>●	Eliminação(2)</b> dos dados pessoais desprovidos de consentimento;</p>
              <p><b>●	Revogação</b> do consentimento a qualquer momento mediante manifestação expressa, sempre de forma gratuita e facilitada;</p>
              <p><b>●	Cancelamento</b> dos seus dados pessoais após o término do seu tratamento de dados pessoais, ressalvadas as hipóteses de guarda obrigatória de registros previstas na legislação vigente e nos demais casos previstos em lei;</p>
              <p>●	<a href="mailto:lgpd@napoleon.com.br">lgpd@napoleon.com.br</a> para o nosso <b><i>Canal de Comunicação do Usuário</i></b>, nas situações que demandem esclarecimentos ou queixas;</p>
              <p>●	<a href="mailto:encarregado@actatechlaw.com.br">encarregado@actatechlaw.com.br</a> para o nosso <b><i>Canal de Comunicação com o Encarregado</i></b> quando o suporte ou outro serviço de atendimento não ficar a contento;</p>
              <p><b>●	AVISO DE DESTAQUE:</b></p>
              <div style={{marginLeft: "3rem"}}>
                <p>●	A opção pela eliminação, revogação (no que for o caso), ou cancelamento de parte ou de todos os dados pessoais poderá comprometer a funcionalidade do nosso <i>website</i>, plataforma, aplicativos, dispositivos ou serviços vinculados.</p>
              </div>
            </div>
          </div>

          <br />
          <p><b>Parte 9: Alterações desta política de privacidade, demais documentos de regramento e legislação aplicável</b></p>
          <br />
          <div>
            <p><b>●	Alterações desta política de privacidade:</b></p>
            <div style={{marginLeft: "3rem"}}>
              <p>●	A <b>NAPOLEON</b> está em constante busca de melhorias nos seus canais de relacionamento, de modo que você, nosso usuário, possa utilizar nossos espaços e serviços experimentando uma ótima experiência, razão pela qual precisamos implementar mudanças, alterações, adições, supressões e quaisquer outras formas de modificações no nosso <i>website</i>, plataforma, aplicativos, dispositivos e outros canais, bem como alterar, periodicamente, esta <b><i>Política de Privacidade</i></b> e demais documentos de privacidade que a integram, de modo a acomodar novas tecnologias, práticas do setor, requisitos regulatórios ou outros fins;</p>
              <p>●	Apesar disso, comprometemo-nos, frente a qualquer modificação nesta <b><i>Política de Privacidade</i></b> que afete de forma <b>relevante</b> seus interesses ou digam respeito a exigências legais ou regulatórios e caso necessário, a nos valer de publicações abertas no nosso <i>website</i>, plataforma, aplicativos, dispositivos ou por outros meios previstos na legislação vigente para promoção dessa comunicação. Alterações decorrentes de determinações legais estão excluídos dessa exigência, assim como novas funcionalidades de qualquer serviço atrelado ao nosso <i>website</i>, plataforma ou aplicativo, bem como outro canal de relacionamento, casos em que entrarão em vigor imediatamente;</p>
              <p>●	É importante destacar que o uso contínuo do nosso <i>website</i>, plataforma, aplicativos ou dispositivos depois das alterações implica concordância e aceitação automática quanto ao teor das modificações realizadas.</p>
            </div>
            <p><b>●	Demais documentos de regramento:</b> nosso conjunto de regras aplicáveis à proteção da sua privacidade e seus dados pessoais abrange esta <b><i>Política de Privacidade</i></b> e outros três documentos muito importantes (todos integrados), sendo:</p>
            <div style={{marginLeft: "3rem"}}>
              <p><b><i>●	Termo de Uso do Website;</i></b></p>
              <p><b><i>●	Política de Cordialidade;</i></b></p>
              <p><b><i>●	Política de Cookies.</i></b></p>
            </div>
            <p><b>●	Legislação aplicável:</b> este documento, assim como os demais que o integram, foi elaborado a partir da Lei Federal n° 13.709, de 14 de agosto de 2018 (Lei Geral de Proteção de Dados Pessoais - LGPD), igualmente alinhado à Constituição Federal de 1988, a Lei nº 8.078/1990 (Código de Proteção e Defesa do Consumidor – CDC), a Lei nº 10.406/2002 (Código Civil – CC), a Lei nº 12.965/2014 (Marco Civil da Internet – MCI), seu decreto regulamentador (Decreto nº 8.771/2016) e demais normas setoriais ou gerais sobre o tema.</p>
          </div>

          <br />
          <p><b>Parte 10: Fale conosco, Encarregado da Proteção da Privacidade e dos Dados Pessoais, Disposições gerais e finais, Declarações de concordância</b></p>
          <br />
          <div>
            <p><b>●	Fale conosco:</b> a qualquer momento, sempre que você tiver alguma dúvida ou solicitação a fazer sobre esta <b><i>Política de Privacidade</i></b> e seus termos, bem como dos demais documentos de regramento, ou simplesmente precisar interagir conosco sobre assuntos envolvendo os seus dados pessoais e/ou privacidade, poderá fazê-lo por meio do:</p>
            <div style={{marginLeft: "3rem"}}>
              <p><b><i>●	Canal de Comunicação do Usuário:</i></b> <a href="mailto:lgpd@napoleon.com.br">lgpd@napoleon.com.br</a>, com prazo de 15 (quinze) dias para retorno definitivo, nos termos da legislação vigente.</p>
            </div>
            <p><b>●	Encarregado da Proteção da Privacidade e dos Dados Pessoais:</b> a qualquer momento, sempre que você tiver alguma reclamação ou, a partir desta, alguma solicitação a fazer sobre esta <b><i>Política de Privacidade</i></b> e seus termos, bem como dos demais documentos de regramento, precise exercer algum direito ou simplesmente precisar interagir sobre assuntos envolvendo os seus dados pessoais e/ou privacidade, poderá fazê-lo por meio do nosso Encarregado da Proteção da Privacidade e dos Dados Pessoais. Responsável por atender as demandas de titulares de dados pessoais, bem como interagir com as autoridades competentes, em especial a Autoridade Nacional de Proteção de Dados – ANPD. Saiba quem é e como contatá-lo abaixo:</p>
            <div style={{marginLeft: "3rem"}}>
              <p><b>●	Encarregado:</b> Luiz Fernando Del Rio Horn;</p>
              <p><b><i>●	Canal de Comunicação com o Encarregado:</i></b> <a href="mailto:encarregado@actatechlaw.com.br">encarregado@actatechlaw.com.br</a>, com prazo de 15 (quinze) dias para retorno definitivo, nos termos da legislação vigente.</p>
            </div>
            <p><b>●	Disposições gerais e finais:</b></p>
            <div style={{marginLeft: "3rem"}}>
              <p>●	Esta <b><i>Política de Privacidade</i></b> consiste na versão válida e eficaz das informações sobre o tratamento dos seus dados pessoais, nosso usuário, por nós da <b>NAPOLEON</b>. Esta versão é responsável por regrar as nossas relações de consumo e comerciais, exceto quando forem utilizados serviços que possuem Políticas de Privacidade próprias, respeitados os direitos adquiridos, os atos jurídicos perfeitos e as decisões consolidadas pelos Tribunais;</p>
              <p>●	A presente <b><i>Política de Privacidade</i></b> não se aplica ao tratamento dos dados pessoais dos funcionários, funcionários destacados, trabalhadores temporários ou outros colaboradores da <b>NAPOLEON</b> em relação às funções laborais que desempenham, existindo uma política de privacidade independente;</p>
              <p>●	Ao utilizar nosso <i>website</i>, aplicativo, dispositivo ou serviço vinculado, considera-se que você, nosso usuário, aceitou esta <b><i>Política de Privacidade</i></b>. Caso venha a discordar ou não aceitar quaisquer dos termos estabelecidos neste documento ou nos demais que o integram deverá cessar e cancelar imediatamente a navegação e outros acessos;</p>
              <p>●	A versão da <b><i>Política de Privacidade</i></b> em vigor será sempre a mais recente. Para identificar a data da versão em vigência é preciso verificar a seção “Data da última atualização”, no topo deste documento;</p>
              <p>●	Você, nosso usuário, pode deixar de usar os serviços da <b>NAPOLEON</b> a qualquer momento. Da mesma forma, a <b>NAPOLEON</b> também poderá deixar de prestar os serviços vinculados ao nosso <i>website</i>, plataforma, aplicativos ou dispositivos a qualquer momento, bem como incluir ou criar novos limites aos serviços;</p>
              <p>●	Caso você, nosso usuário, não concordar com qualquer alteração a esta <b><i>Política de Privacidade</i></b>, pedimos que interrompa imediatamente o uso do nosso <i>website</i>, plataforma, aplicativos, dispositivos ou dos serviços da <b>NAPOLEON</b>. Caso contrário, o uso posterior acarretará no seu aceite à nova versão vigente à época;</p>
              <p>●	As cláusulas desta Política de Privacidade seguirão vigentes ante a qualquer forma de terminação do <i>website</i>, ocorrida por qualquer motivo, de modo a continuar a produzir efeitos sobre as partes enquanto mantidas relações jurídicas subsequentes.</p>
            </div>
            <p><b>●	Declarações de reconhecimento:</b></p>
            <div style={{marginLeft: "3rem"}}>
              <p>●	O USUÁRIO, TITULAR DE DADOS PESSOAIS, <b>RECONHECE</b> QUE AS DESCRIÇÕES DAS AÇÕES DE TRATAMENTO DE DADOS PESSOAIS, ENVOLVENDO COLETA, PRODUÇÃO, RECEPÇÃO, CLASSIFICAÇÃO, UTILIZAÇÃO, ACESSO, REPRODUÇÃO, TRANSMISSÃO, DISTRIBUIÇÃO, PROCESSAMENTO, ARQUIVAMENTO, ARMAZENAMENTO, ELIMINAÇÃO, AVALIAÇÃO OU CONTROLE DA INFORMAÇÃO, MODIFICAÇÃO, COMUNICAÇÃO, TRANSFERÊNCIA, DIFUSÃO OU EXTRAÇÃO DA <b>NAPOLEON</b> FORAM SUFICIENTEMENTE DESCRITAS NESTA <b><i>POLÍTICA DE PRIVACIDADE</i></b> E NOS DEMAIS DOCUMENTOS DE REGRAMENTO QUE A INTEGRAM, COM A <b>NAPOLEON</b> CUMPRIDO DEVIDAMENTE O DEVER DE INFORMAÇÃO.</p>
              <p>●	O USUÁRIO, TITULAR DE DADOS PESSOAIS, <b>RECONHECE</b> ESTAR CIENTE QUE A SUA NAVEGAÇÃO, TOMADA DE SERVIÇOS, AQUISIÇÃO DE PRODUTOS, REPASSE DE DADOS PESSOAIS, ENTRE OUTROS PROCEDIMENTOS RELACIONAIS, NÃO ESTÃO VINCULADOS A UMA DECLARAÇÃO DE ACEITAÇÃO ÚNICA E IRREVERSÍVEL, MAS SIM, NOS TERMOS DA LGPD, GRANULADA E MODIFICÁVEL A QUALQUER TEMPO. SIGNIFICA DIZER QUE TODO USUÁRIO PODERÁ, QUERENDO, POR MEIO DAS FERRAMENTAS DISPONIBILIZADAS NO NOSSO <b><i>BANNER</i> LGPD</b> E <b>CHECK BOX</b>, DECIDIR AS CONDIÇÕES DE NAVEGABILIDADE EM AUTOGERENCIAMENTO, INCLUSIVE DOS CONSENTIMENTOS PADRÕES OU ESPECÍFICOS QUANDO FOR O CASO, GARANTINDO ASSIM A AUTODETERMINAÇÃO INFORMATIVA NA EXPERIÊNCIA RELACIONAL.</p>
              <p>●	AINDA ASSIM, O USUÁRIO, DISCORDANDO DAS CONDIÇÕES DISPONÍVEIS NO AUTOGERENCIAMENTO, INCLUSIVE DE QUAISQUER DAS PREVISÕES PRESENTES NESTA <b><i>POLÍTICA DE PRIVACIDADE</i></b> E DEMAIS DOCUMENTOS DECLARATÓRIOS DE CONDUÇÃO E COMPORTAMENTO ATRELADOS, <b>RECONHECE</b> A NECESSIDADE DO IMEDIATO ENCERRAMENTO DE NAVEGAÇÃO NO NOSSO WEBSITE, PRECEDIDO DAS OPÇÕES DE NEGATIVAS NO <b><i>BANNER</i> LGPD</b>.</p>
            </div>
          </div>

          <br />
          <p>Estamos sempre à disposição para esclarecer suas dúvidas, atender suas solicitações ou ouvi-lo nas suas demandas e colocá-lo no controle dos seus dados pessoais. Conte conosco para mantê-lo informado!</p>
          <br />
          <p style={{ textAlign: "center" }}><b>NAPOLEON</b></p>
        </div>

        <Footer settings={settings} segments={segments} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const segments = (await getSegments()) || [];
  const settings = (await getSettingsContent()) || [];

  return {
    props: {
      segments: segments?.segments || [],
      settings: settings?.setting || [],
    },
    revalidate: 10, // In seconds
  };
}
