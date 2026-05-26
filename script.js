function showSection(sectionId) {
    const pages = document.querySelectorAll(".page");
    const targetPage = document.getElementById(sectionId);

    if (!targetPage) {
        return;
    }

    pages.forEach((page) => {
        page.classList.remove("active");
    });

    targetPage.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function analyzeAnswer() {
    const answerInput = document.getElementById("answer");
    const diagnosisTitle = document.getElementById("diagnosis-title");
    const diagnosisText = document.getElementById("diagnosis-text");
    const errorType = document.getElementById("error-type");

    const answer = answerInput.value.trim();

    if (answer === "10") {
        diagnosisTitle.textContent = "Resposta adequada";
        diagnosisText.textContent =
            "Agora você considerou a etapa de retirada antes da divisão. Seu raciocínio está coerente com o enunciado.";
        errorType.textContent = "Resposta adequada";
    } else if (answer === "16") {
        diagnosisTitle.textContent = "Interpretação incompleta do enunciado";
        diagnosisText.textContent =
            "Você identificou corretamente a quantidade total (48) e o número de caixas (3), mas não considerou que 18 livros já foram distribuídos antes da divisão.";
        errorType.textContent = "Interpretativo textual";
    } else {
        diagnosisTitle.textContent = "Possível erro procedimental";
        diagnosisText.textContent =
            "O sistema identificou uma possível inconsistência matemática na resolução. Revise a operação utilizada e verifique se todos os dados do enunciado foram considerados.";
        errorType.textContent = "Procedimental matemático";
    }

    showSection("analysis");
}

function saveReview() {
    alert("Revisão docente salva com sucesso!");
}