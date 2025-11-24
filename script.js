        const questions = {
            schichtenmodelle: [
                {
                    question: "Wie heißt die 1. Schicht des OSI-Modells auf Englisch?",
                    answers: ["physical", "physical layer"],
                    correct: ["PHYSICAL", "PHYSICAL LAYER"]
                },
                {
                    question: "Wie heißt die 2. Schicht des OSI-Modells auf Englisch?",
                    answers: ["data link", "data link layer"],
                    correct: ["DATA LINK", "DATA LINK LAYER"]
                },
                {
                    question: "Wie heißt die 3. Schicht des OSI-Modells auf Englisch?",
                    answers: ["network", "network layer"],
                    correct: ["NETWORK", "NETWORK LAYER"]
                },
                {
                    question: "Wie heißt die 4. Schicht des OSI-Modells auf Englisch?",
                    answers: ["transport", "transport layer"],
                    correct: ["TRANSPORT", "TRANSPORT LAYER"]
                },
                {
                    question: "Wie heißt die 5. Schicht des OSI-Modells auf Englisch?",
                    answers: ["session", "session layer"],
                    correct: ["SESSION", "SESSION LAYER"]
                },
                {
                    question: "Wie heißt die 6. Schicht des OSI-Modells auf Englisch?",
                    answers: ["presentation", "presentation layer"],
                    correct: ["PRESENTATION", "PRESENTATION LAYER"]
                },
                {
                    question: "Wie heißt die 7. Schicht des OSI-Modells auf Englisch?",
                    answers: ["application", "application layer"],
                    correct: ["APPLICATION", "APPLICATION LAYER"]
                },
                {
                    question: "Wie viele Schichten hat das TCP/IP-Modell?",
                    answers: ["4", "vier"],
                    correct: ["4", "VIER"]
                },
                {
                    question: "Welche OSI-Schichten werden im TCP/IP-Modell in die Application Layer zusammengefasst?",
                    answers: ["5, 6, 7", "session, presentation, application", "5, 6 und 7"],
                    correct: ["5, 6, 7", "SESSION, PRESENTATION, APPLICATION", "5, 6 UND 7"]
                },
                {
                    question: "Auf welcher Schicht arbeitet die MAC-Adresse?",
                    answers: ["Schicht 2", "Data Link", "Layer 2", "Data Link Layer"],
                    correct: ["SCHICHT 2", "DATA LINK", "LAYER 2", "DATA LINK LAYER"]
                },
                {
                    question: "Auf welcher Schicht arbeitet die IP-Adresse?",
                    answers: ["Schicht 3", "Network", "Layer 3", "Network Layer"],
                    correct: ["SCHICHT 3", "NETWORK", "LAYER 3", "NETWORK LAYER"]
                },
                {
                    question: "Auf welcher Schicht arbeitet die Port-Adresse?",
                    answers: ["Schicht 4", "Transport", "Layer 4", "Transport Layer"],
                    correct: ["SCHICHT 4", "TRANSPORT", "LAYER 4", "TRANSPORT LAYER"]
                },
                {
                    question: "Wie heißen die Dateneinheiten auf Schicht 2?",
                    answers: ["Frame", "Frames"],
                    correct: ["FRAME", "FRAMES"]
                },
                {
                    question: "Wie heißen die Dateneinheiten auf Schicht 3?",
                    answers: ["Paket", "Pakete"],
                    correct: ["PAKET", "PAKETE"]
                },
                {
                    question: "Wie heißen die Dateneinheiten auf Schicht 4?",
                    answers: ["Segment", "Segmente"],
                    correct: ["SEGMENT", "SEGMENTE"]
                }
            ],
            ugv: [
                {
                    question: "Aus wie vielen Adern besteht ein Installationskabel (Twisted Pair)?",
                    answers: ["8", "acht"],
                    correct: ["8", "ACHT"]
                },
                {
                    question: "Was ist der Unterschied zwischen Installationskabel und Patchkabel?",
                    answers: ["Installationskabel ist starr, Patchkabel ist flexibel", "Patchkabel ist flexibel, Installationskabel ist starr"],
                    correct: ["INSTALLATIONSKABEL IST STARR, PATCHKABEL IST FLEXIBEL", "PATCHKABEL IST FLEXIBEL, INSTALLATIONSKABEL IST STARR"]
                },
                {
                    question: "Wie heißt die erste Verkabelungsebene in der Gebäudeverkabelung (UGV)?",
                    answers: ["Primärbereich", "Campus"],
                    correct: ["PRIMÄRBEREICH", "CAMPUS"]
                },
                {
                    question: "Wie heißt die zweite Verkabelungsebene in der Gebäudeverkabelung?",
                    answers: ["Sekundärbereich", "Vertikalverkabelung"],
                    correct: ["SEKUNDÄRBEREICH", "VERTIKALVERKABELUNG"]
                },
                {
                    question: "Wie heißt die dritte Verkabelungsebene in der Gebäudeverkabelung?",
                    answers: ["Tertiärbereich", "Horizontalverkabelung"],
                    correct: ["TERTIÄRBEREICH", "HORIZONTALVERKABELUNG"]
                },
                {
                    question: "Welche Norm wird für RJ45-Stecker verwendet?",
                    answers: ["8P8C", "8 Positionen 8 Kontakte"],
                    correct: ["8P8C", "8 POSITIONEN 8 KONTAKTE"]
                },
                {
                    question: "Was ist eine Anschlussdose (TAE)?",
                    answers: ["Eine Wanddose zur Verbindung von Patchkabeln mit Installationskabeln"],
                    correct: ["EINE WANDDOSE ZUR VERBINDUNG VON PATCHKABELN MIT INSTALLATIONSKABELN"]
                },
                {
                    question: "Was ist ein Anschlussmodul?",
                    answers: ["Ein Modul mit mehreren Anschlüssen im Rangierfeld"],
                    correct: ["EIN MODUL MIT MEHREREN ANSCHLÜSSEN IM RANGIERFELD"]
                },
                {
                    question: "Wie heißt das Gerät, auf dem die Installationskabel terminiert werden?",
                    answers: ["Rangierfeld", "Patchpanel"],
                    correct: ["RANGIERFELD", "PATCHPANEL"]
                },
                {
                    question: "Was bedeutet die Abkürzung GV in der Gebäudeverkabelung?",
                    answers: ["Gebäudeverkabelung"],
                    correct: ["GEBÄUDEVERKABELUNG"]
                },
                {
                    question: "Was bedeutet die Abkürzung SV in der Gebäudeverkabelung?",
                    answers: ["Sekundärverkabelung"],
                    correct: ["SEKUNDÄRVERKABELUNG"]
                },
                {
                    question: "Was bedeutet die Abkürzung EV in der Gebäudeverkabelung?",
                    answers: ["Etagenverkabelung"],
                    correct: ["ETAGENVERKABELUNG"]
                }
            ],
            geraete: [
                {
                    question: "Auf welcher Schicht arbeitet ein Router?",
                    answers: ["Schicht 3", "Network Layer", "Layer 3", "Netzwerkschicht"],
                    correct: ["SCHICHT 3", "NETWORK LAYER", "LAYER 3", "NETZWERKSCHICHT"]
                },
                {
                    question: "Auf welcher Schicht arbeitet ein Switch?",
                    answers: ["Schicht 2", "Data Link Layer", "Layer 2"],
                    correct: ["SCHICHT 2", "DATA LINK LAYER", "LAYER 2"]
                },
                {
                    question: "Auf welcher Schicht arbeitet ein Hub?",
                    answers: ["Schicht 1", "Physical Layer", "Layer 1"],
                    correct: ["SCHICHT 1", "PHYSICAL LAYER", "LAYER 1"]
                },
                {
                    question: "Was ist eine NIC?",
                    answers: ["Netzwerkschnittstellenkarte", "Network Interface Card"],
                    correct: ["NETZWERKSCHNITTSTELLENKARTE", "NETWORK INTERFACE CARD"]
                },
                {
                    question: "Welches Gerät wandelt Lichtsignale in elektrische Signale um?",
                    answers: ["Media Converter"],
                    correct: ["MEDIA CONVERTER"]
                },
                {
                    question: "Auf welcher Schicht arbeitet ein Repeater?",
                    answers: ["Schicht 1", "Physical", "Layer 1"],
                    correct: ["SCHICHT 1", "PHYSICAL", "LAYER 1"]
                },
                {
                    question: "Was ist die Grundfunktion einer Firewall?",
                    answers: ["Kontrolle des Datenverkehrs zwischen Netzwerken", "Filtern von Datenpaketen"],
                    correct: ["KONTROLLE DES DATENVERKEHRS ZWISCHEN NETZWERKEN", "FILTERN VON DATENPAKETEN"]
                },
                {
                    question: "Ein Switch erzeugt einen Netzwerk-Sicherungsbereich oder Broadcast-Bereich. Wie heißt dieser Bereich auf Englisch?",
                    answers: ["Collision Domain", "Broadcast Domain"],
                    correct: ["COLLISION DOMAIN", "BROADCAST DOMAIN"]
                },
                {
                    question: "Ein Router trennt verschiedene Netzwerke, indem er diese Art von Bereich isoliert. Welcher?",
                    answers: ["Broadcast Domain"],
                    correct: ["BROADCAST DOMAIN"]
                },
                {
                    question: "Was ist der Unterschied zwischen einem Hub und einem Switch?",
                    answers: ["Hub arbeitet auf Schicht 1, Switch auf Schicht 2", "Switch filtert Frames, Hub nicht"],
                    correct: ["HUB ARBEITET AUF SCHICHT 1, SWITCH AUF SCHICHT 2", "SWITCH FILTERT FRAMES, HUB NICHT"]
                }
            ],
            medien: [
                {
                    question: "Aus welchem Material besteht Glasfaser?",
                    answers: ["Glas", "Siliziumdioxid"],
                    correct: ["GLAS", "SILIZIUMDIOXID"]
                },
                {
                    question: "Welche Übertragungsmedium ermöglicht die höchste Bandbreite?",
                    answers: ["Glasfaser"],
                    correct: ["GLASFASER"]
                },
                {
                    question: "Wie heißt das Kupfer-Übertragungsmedium für Ethernet?",
                    answers: ["Twisted Pair", "TP"],
                    correct: ["TWISTED PAIR", "TP"]
                },
                {
                    question: "Was ist UTP?",
                    answers: ["Unshielded Twisted Pair", "Ungeschirmtes verdrilltes Paar"],
                    correct: ["UNSHIELDED TWISTED PAIR", "UNGESCHIRMTES VERDRILLTES PAAR"]
                },
                {
                    question: "Was ist STP?",
                    answers: ["Shielded Twisted Pair", "Geschirmtes verdrilltes Paar"],
                    correct: ["SHIELDED TWISTED PAIR", "GESCHIRMTES VERDRILLTES PAAR"]
                },
                {
                    question: "Welche Übertragungsart nutzt Funk?",
                    answers: ["WLAN", "Wireless"],
                    correct: ["WLAN", "WIRELESS"]
                },
                {
                    question: "Welche Frequenz nutzt WLAN hauptsächlich?",
                    answers: ["2.4 GHz", "5 GHz"],
                    correct: ["2.4 GHZ", "5 GHZ"]
                },
                {
                    question: "Nenne die aktuelle Mobilfunk-Generation für Ultra-Hochgeschwindigkeitsübertragung:",
                    answers: ["5G"],
                    correct: ["5G"]
                },
                {
                    question: "Welche Mobilfunk-Generation war die Vorgängerin von 5G?",
                    answers: ["4G", "LTE"],
                    correct: ["4G", "LTE"]
                },
                {
                    question: "Was ist der Vorteil von Glasfaser gegenüber Kupfer?",
                    answers: ["Größere Bandbreite, weniger Dämpfung, immun gegen Elektromagnetische Interferenz"],
                    correct: ["GRÖSSERE BANDBREITE, WENIGER DÄMPFUNG, IMMUN GEGEN ELEKTROMAGNETISCHE INTERFERENZ"]
                },
                {
                    question: "Was ist ein Nachteil von Funk/WLAN?",
                    answers: ["Begrenzte Reichweite, Interferenzen, niedrigere Bandbreite als Kabel"],
                    correct: ["BEGRENZTE REICHWEITE, INTERFERENZEN, NIEDRIGERE BANDBREITE ALS KABEL"]
                },
                {
                    question: "Wie weit kann sich ein Netzwerk über Glasfaser ausdehnen?",
                    answers: ["über 100 km", "Mehrere Kilometer"],
                    correct: ["ÜBER 100 KM", "MEHRERE KILOMETER"]
                }
            ],
            firewall: [
                {
                    question: "Was ist ein Bastion Host?",
                    answers: ["Ein isolierter Computer, der als Schutz zwischen Netzwerken fungiert"],
                    correct: ["EIN ISOLIERTER COMPUTER, DER ALS SCHUTZ ZWISCHEN NETZWERKEN FUNGIERT"]
                },
                {
                    question: "Was ist eine Three-Homed Firewall?",
                    answers: ["Eine Firewall mit drei Netzwerkschnittstellen"],
                    correct: ["EINE FIREWALL MIT DREI NETZWERKSCHNITTSTELLEN"]
                },
                {
                    question: "Welche drei Netzwerk-Zonen verbindet eine Three-Homed Firewall normalerweise?",
                    answers: ["LAN, DMZ, Internet", "internes Netzwerk, DMZ, externes Netzwerk"],
                    correct: ["LAN, DMZ, INTERNET", "INTERNES NETZWERK, DMZ, EXTERNES NETZWERK"]
                },
                {
                    question: "Wie heißt die Netzwerk-Zone zwischen dem internen Netzwerk und dem Internet?",
                    answers: ["DMZ", "Demilitarized Zone"],
                    correct: ["DMZ", "DEMILITARIZED ZONE"]
                },
                {
                    question: "Welche Server sind typischerweise in der DMZ?",
                    answers: ["Webserver, Mailserver, DNS-Server"],
                    correct: ["WEBSERVER, MAILSERVER, DNS-SERVER"]
                },
                {
                    question: "Was ist ein Screened Subnet?",
                    answers: ["Ein Subnetz, das von einer Firewall geschützt wird"],
                    correct: ["EIN SUBNETZ, DAS VON EINER FIREWALL GESCHÜTZT WIRD"]
                },
                {
                    question: "Unterschied zwischen DMZ und Screened Subnet?",
                    answers: ["DMZ ist ein spezieller Fall eines Screened Subnets mit erhöhtem Schutzniveau"],
                    correct: ["DMZ IST EIN SPEZIELLER FALL EINES SCREENED SUBNETS MIT ERHÖHTEM SCHUTZNIVEAU"]
                },
                {
                    question: "Auf welcher Schicht arbeitet eine typische Firewall primär?",
                    answers: ["Schicht 3", "Schicht 4", "Layer 3", "Layer 4"],
                    correct: ["SCHICHT 3", "SCHICHT 4", "LAYER 3", "LAYER 4"]
                },
                {
                    question: "Was prüft eine Stateful Firewall?",
                    answers: ["Den Zustand von Verbindungen"],
                    correct: ["DEN ZUSTAND VON VERBINDUNGEN"]
                },
                {
                    question: "Was ist Packet Filtering?",
                    answers: ["Das Zulassen oder Blockieren von Datenpaketen basierend auf Regeln"],
                    correct: ["DAS ZULASSEN ODER BLOCKIEREN VON DATENPAKETEN BASIEREND AUF REGELN"]
                },
                {
                    question: "Nenne die Komponenten einer DMZ-Architektur:",
                    answers: ["Zwei Firewalls, internes Netzwerk, DMZ, Internet"],
                    correct: ["ZWEI FIREWALLS, INTERNES NETZWERK, DMZ, INTERNET"]
                },
                {
                    question: "Was ist Proxy-Filtering?",
                    answers: ["Ein Firewall-Typ, der als Vermittler zwischen Clients und Servern agiert"],
                    correct: ["EIN FIREWALL-TYP, DER ALS VERMITTLER ZWISCHEN CLIENTS UND SERVERN AGIERT"]
                }
            ]
        };

        let currentCategory = null;
        let currentQuestionIndex = 0;
        let currentQuestions = [];
        let stats = {
            correct: 0,
            wrong: 0
        };
        let wrongAnswers = [];
        let answered = false;
        let isRepeatingWrong = false;
        let isAwaitingCorrection = false;

        function startQuiz(category) {
            currentCategory = category;
            currentQuestionIndex = 0;
            stats = { correct: 0, wrong: 0 };
            wrongAnswers = [];
            answered = false;
            isRepeatingWrong = false;
            isAwaitingCorrection = false;
            
            currentQuestions = [...questions[category]];
            showQuiz();
            displayQuestion();
        }

        function repeatWrong() {
            if (wrongAnswers.length === 0) return;
            
            currentCategory = null;
            currentQuestionIndex = 0;
            stats = { correct: 0, wrong: 0 };
            currentQuestions = [...wrongAnswers];
            wrongAnswers = [];
            answered = false;
            isRepeatingWrong = true;
            isAwaitingCorrection = false;
            
            showQuiz();
            displayQuestion();
        }

        function showQuiz() {
            document.getElementById('mainMenu').style.display = 'none';
            document.getElementById('quizContainer').classList.add('active');
        }

        function backToMenu() {
            document.getElementById('quizContainer').classList.remove('active');
            document.getElementById('mainMenu').style.display = 'grid';
            resetQuiz();
            updateRepeatButton();
        }

        function resetQuiz() {
            currentCategory = null;
            currentQuestionIndex = 0;
            stats = { correct: 0, wrong: 0 };
            answered = false;
            isAwaitingCorrection = false;
            document.getElementById('answerInput').value = '';
            document.getElementById('correctionInput').value = '';
            document.getElementById('feedback').classList.remove('show', 'correct', 'incorrect');
            document.getElementById('answerInput').classList.remove('correct', 'incorrect');
            document.getElementById('checkBtn').style.display = 'inline-block';
            document.getElementById('nextBtn').style.display = 'none';
            document.getElementById('correctionPrompt').classList.remove('show');
        }

        function displayQuestion() {
            if (currentQuestionIndex >= currentQuestions.length) {
                showCompletion();
                return;
            }

            const question = currentQuestions[currentQuestionIndex];
            document.getElementById('questionText').textContent = question.question;
            document.getElementById('answerInput').value = '';
            document.getElementById('correctionInput').value = '';
            document.getElementById('answerInput').classList.remove('correct', 'incorrect');
            document.getElementById('feedback').classList.remove('show', 'correct', 'incorrect');
            document.getElementById('correctionPrompt').classList.remove('show');
            document.getElementById('checkBtn').style.display = 'inline-block';
            document.getElementById('nextBtn').style.display = 'none';
            document.getElementById('answerInput').focus();
            
            answered = false;
            isAwaitingCorrection = false;
            updateProgress();
            updateStats();

            if (isRepeatingWrong) {
                document.getElementById('categoryTitle').textContent = '🔄 Falsche Fragen wiederholen';
            } else {
                const categoryNames = {
                    schichtenmodelle: '🏗️ Schichtenmodelle',
                    ugv: '🏢 UGV / Gebäudeverkabelung',
                    geraete: '🔌 Netzwerkgeräte',
                    medien: '📡 Übertragungsmedien',
                    firewall: '🛡️ Firewalls'
                };
                document.getElementById('categoryTitle').textContent = categoryNames[currentCategory];
            }
        }

        function handleKeyPress(event) {
            if (event.key === 'Enter') {
                if (!answered) {
                    checkAnswer();
                } else if (answered && !isAwaitingCorrection) {
                    nextQuestion();
                }
            }
        }

        function handleCorrectionKeyPress(event) {
            if (event.key === 'Enter' && isAwaitingCorrection) {
                checkCorrection();
            }
        }

        function checkAnswer() {
            if (answered) return;

            const userAnswer = document.getElementById('answerInput').value.trim().toUpperCase();
            const question = currentQuestions[currentQuestionIndex];
            const isCorrect = question.correct.includes(userAnswer);

            answered = true;

            const feedback = document.getElementById('feedback');
            const feedbackLabel = document.getElementById('feedbackLabel');
            const feedbackText = document.getElementById('feedbackText');
            const solution = document.getElementById('solution');
            const solutionText = document.getElementById('solutionText');
            const input = document.getElementById('answerInput');

            if (isCorrect) {
                feedbackLabel.textContent = '✓ Korrekt!';
                feedbackText.textContent = '';
                solution.style.display = 'none';
                feedback.classList.add('correct');
                input.classList.add('correct');
                stats.correct++;
                
                document.getElementById('checkBtn').style.display = 'none';
                document.getElementById('nextBtn').style.display = 'inline-block';
                document.getElementById('correctionPrompt').classList.remove('show');
                isAwaitingCorrection = false;
            } else {
                feedbackLabel.textContent = '✗ Leider falsch';
                feedbackText.textContent = '';
                solution.style.display = 'block';
                solutionText.textContent = question.answers[0];
                feedback.classList.add('incorrect');
                input.classList.add('incorrect');
                stats.wrong++;
                
                wrongAnswers.push(question);

                // Zeige Korrektur-Prompt
                document.getElementById('checkBtn').style.display = 'none';
                document.getElementById('nextBtn').style.display = 'none';
                document.getElementById('correctionPrompt').classList.add('show');
                document.getElementById('correctionInput').classList.remove('correct');
                document.getElementById('correctionInput').value = '';
                document.getElementById('correctionFeedback').textContent = '';
                isAwaitingCorrection = true;
                setTimeout(() => document.getElementById('correctionInput').focus(), 100);
            }

            feedback.classList.add('show');
            updateStats();
        }

        function checkCorrection() {
            if (!isAwaitingCorrection) return;

            const userAnswer = document.getElementById('correctionInput').value.trim().toUpperCase();
            const question = currentQuestions[currentQuestionIndex];
            const isCorrect = question.correct.includes(userAnswer);

            const correctionInput = document.getElementById('correctionInput');
            const correctionFeedback = document.getElementById('correctionFeedback');

            if (isCorrect) {
                correctionInput.classList.add('correct');
                correctionFeedback.textContent = '✓ Genau! Jetzt weißt du die richtige Antwort.';
                correctionFeedback.style.color = '#00ff00';
                
                setTimeout(() => {
                    document.getElementById('nextBtn').style.display = 'inline-block';
                    isAwaitingCorrection = false;
                }, 600);
            } else {
                correctionFeedback.textContent = '✗ Das ist nicht richtig. Versuche es erneut oder lies die angezeigte Lösung.';
                correctionFeedback.style.color = '#ff6666';
                correctionInput.value = '';
                setTimeout(() => correctionInput.focus(), 100);
            }
        }

        function nextQuestion() {
            currentQuestionIndex++;
            displayQuestion();
        }

        function updateProgress() {
            const total = currentQuestions.length;
            const current = currentQuestionIndex + 1;
            const percentage = (current / total) * 100;
            document.getElementById('progressFill').style.width = percentage + '%';
            document.getElementById('questionNumber').textContent = `Frage ${current} von ${total}`;
        }

        function updateStats() {
            document.getElementById('correctCount').textContent = stats.correct;
            document.getElementById('wrongCount').textContent = stats.wrong;
        }

        function updateRepeatButton() {
            const repeatBtn = document.getElementById('repeatBtn');
            if (wrongAnswers.length > 0) {
                repeatBtn.disabled = false;
                repeatBtn.textContent = `🔄 Falsche Fragen wiederholen (${wrongAnswers.length})`;
            } else {
                repeatBtn.disabled = true;
                repeatBtn.textContent = '🔄 Falsche Fragen wiederholen';
            }
        }

        function showCompletion() {
            const quizContainer = document.getElementById('quizContainer');
            const total = currentQuestions.length;
            const correct = stats.correct;
            const wrong = stats.wrong;
            const percentage = Math.round((correct / total) * 100);

            quizContainer.innerHTML = `
                <div class="nav-buttons">
                    <button class="back-btn" onclick="backToMenu()">← Zurück zum Menü</button>
                </div>
                <div class="completion-screen">
                    <div class="completion-message">Quiz abgeschlossen!</div>
                    <div class="completion-stats">
                        <div class="completion-stat correct">
                            <div class="completion-stat-number">${correct}</div>
                            <div class="stat-label">Richtig</div>
                        </div>
                        <div class="completion-stat incorrect">
                            <div class="completion-stat-number">${wrong}</div>
                            <div class="stat-label">Falsch</div>
                        </div>
                    </div>
                    <div style="font-size: 2em; margin-bottom: 30px;">
                        <span style="color: #00d4ff; font-weight: 700;">${percentage}%</span>
                    </div>
                    <div class="completion-buttons">
                        <button class="category-btn" onclick="backToMenu()">Zurück zum Menü</button>
                        <button class="action-btn" onclick="repeatWrong()" ${wrongAnswers.length > 0 ? '' : 'disabled'}>🔄 Falsche wiederholen (${wrongAnswers.length})</button>
                    </div>
                </div>
            `;

            updateRepeatButton();
        }