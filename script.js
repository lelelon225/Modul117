const categoryNames = {
    grundlagen: '🏗️ Grundlagen & Topologien',
    netzwerkausdehnung: '🌐 Netzwerkausdehnung',
    schichtenmodelle: '📊 Schichtenmodelle',
    ugv: '🏢 UGV / Gebäudeverkabelung',
    medien: '📡 Übertragungsmedien',
    geraete: '🔌 Netzwerkgeräte',
    firewall: '🛡️ Firewalls',
    protokolle: '🔐 Protokolle & Dienste'
};
const questions = {
    grundlagen: [
        {
            question: "Was versteht man unter einem Netzwerk?",
            answers: ["Der Zusammenschluss mehrerer Computersysteme zur Datenübertragung"],
            correct: ["DER ZUSAMMENSCHLUSS MEHRERER COMPUTERSYSTEME ZUR DATENÜBERTRAGUNG"]
        },
        {
            question: "Nenne die fünf verschiedenen Netzwerktopologien:",
            answers: ["Punkt-zu-Punkt, Ring, Stern, Baum, Bus"],
            correct: ["PUNKT-ZU-PUNKT, RING, STERN, BAUM, BUS"]
        },
        {
            question: "Welche Topologie wird in der strukturierten Gebäudeverkabelung verwendet?",
            answers: ["Sterntopologie", "Stern"],
            correct: ["STERNTOPOLOGIE", "STERN"]
        },
        {
            question: "Welche Topologie bietet die grösste Ausfallsicherheit?",
            answers: ["Ring-Topologie", "Ringtopologie"],
            correct: ["RING-TOPOLOGIE", "RINGTOPOLOGIE"]
        },
        {
            question: "Was ist ein Nachteil der Bus-Topologie?",
            answers: ["Bei Defekt eines Knoten fällt das ganze Netzwerk aus", "Single Point of Failure"],
            correct: ["BEI DEFEKT EINES KNOTEN FÄLLT DAS GANZE NETZWERK AUS", "SINGLE POINT OF FAILURE"]
        },
        {
            question: "Welche Topologie wird mit einem Hub/Switch in verkabelten LANs realisiert?",
            answers: ["Sterntopologie", "Stern"],
            correct: ["STERNTOPOLOGIE", "STERN"]
        },
        {
            question: "Wie kann man eine Baumtopologie beschreiben?",
            answers: ["Eine Verknüpfung mehrerer Sterntopologien", "Mehrere Sterne an einem Backbone verbunden"],
            correct: ["EINE VERKNÜPFUNG MEHRERER STERNTOPOLOGIEN", "MEHRERE STERNE AN EINEM BACKBONE VERBUNDEN"]
        },
        {
            question: "Welcher Vorteil hat die Sterntopologie gegenüber der Bus-Topologie?",
            answers: ["Höhere Ausfallsicherheit, Fehlertoleranz, leichtere Wartung"],
            correct: ["HÖHERE AUSFALLSICHERHEIT, FEHLERTOLERANZ, LEICHTERE WARTUNG"]
        },
        {
            question: "Was ist ein Nachteil der Ringtopologie?",
            answers: ["Defekt einer Leitung unterbricht das ganze Netzwerk", "Komplizierte Fehlersuche"],
            correct: ["DEFEKT EINER LEITUNG UNTERBRICHT DAS GANZE NETZWERK", "KOMPLIZIERTE FEHLERSUCHE"]
        }
    ],
    
    netzwerkausdehnung: [
        {
            question: "Wofür steht die Abkürzung PAN?",
            answers: ["Personal Area Network"],
            correct: ["PERSONAL AREA NETWORK"]
        },
        {
            question: "Wofür steht die Abkürzung WPAN?",
            answers: ["Wireless Personal Area Network"],
            correct: ["WIRELESS PERSONAL AREA NETWORK"]
        },
        {
            question: "Wofür steht die Abkürzung LAN?",
            answers: ["Local Area Network"],
            correct: ["LOCAL AREA NETWORK"]
        },
        {
            question: "Wofür steht die Abkürzung WLAN?",
            answers: ["Wireless Local Area Network"],
            correct: ["WIRELESS LOCAL AREA NETWORK"]
        },
        {
            question: "Wofür steht die Abkürzung CAN?",
            answers: ["Campus Area Network"],
            correct: ["CAMPUS AREA NETWORK"]
        },
        {
            question: "Wofür steht die Abkürzung MAN?",
            answers: ["Metropolitan Area Network"],
            correct: ["METROPOLITAN AREA NETWORK"]
        },
        {
            question: "Wofür steht die Abkürzung WAN?",
            answers: ["Wide Area Network"],
            correct: ["WIDE AREA NETWORK"]
        },
        {
            question: "Ordne PAN, LAN, CAN, MAN, WAN der Grösse nach (von klein zu gross):",
            answers: ["PAN, LAN, CAN, MAN, WAN"],
            correct: ["PAN, LAN, CAN, MAN, WAN"]
        },
        {
            question: "Gib zwei Beispiele für Geräte innerhalb eines WPAN:",
            answers: ["Smartwatch, Kopfhörer", "Handy, Tablet", "Bluetooth-Geräte"],
            correct: ["SMARTWATCH, KOPFHÖRER", "HANDY, TABLET", "BLUETOOTH-GERÄTE"]
        },
        {
            question: "Was verbindet alle xANs (verschiedene Netzwerkausdehnungen)?",
            answers: ["Das Internet"],
            correct: ["DAS INTERNET"]
        },
        {
            question: "Welche Netzwerkausdehnung umfasst eine typische Schulanlage?",
            answers: ["CAN", "Campus Area Network"],
            correct: ["CAN", "CAMPUS AREA NETWORK"]
        },
        {
            question: "Welche Netzwerkausdehnung umfasst ein einzelnes Klassenzimmer?",
            answers: ["LAN", "Local Area Network"],
            correct: ["LAN", "LOCAL AREA NETWORK"]
        }
    ],

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
            question: "Wie heißt die 1. Schicht des TCP/IP-Modells auf Deutsch?",
            answers: ["Netzzugangs-Schicht", "Netzzugangsschicht"],
            correct: ["NETZZUGANGS-SCHICHT", "NETZZUGANGSSCHICHT"]
        },
        {
            question: "Wie heißt die 2. Schicht des TCP/IP-Modells auf Deutsch?",
            answers: ["Netzübergreifende Schicht", "Internetschicht"],
            correct: ["NETZÜBERGREIFENDE SCHICHT", "INTERNETSCHICHT"]
        },
        {
            question: "Wie heißt die 3. Schicht des TCP/IP-Modells auf Deutsch?",
            answers: ["Transport-Schicht", "Transportschicht"],
            correct: ["TRANSPORT-SCHICHT", "TRANSPORTSCHICHT"]
        },
        {
            question: "Wie heißt die 4. Schicht des TCP/IP-Modells auf Deutsch?",
            answers: ["Anwendungs-Schicht", "Anwendungsschicht"],
            correct: ["ANWENDUNGS-SCHICHT", "ANWENDUNGSSCHICHT"]
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
            question: "Auf welcher Schicht arbeitet die Port-Adresse / Portnummer?",
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
        },
        {
            question: "Wie wird auf der Transportschicht adressiert?",
            answers: ["Mit Portnummern", "Mit Port"],
            correct: ["MIT PORTNUMMERN", "MIT PORT"]
        },
        {
            question: "Wie wird auf der Netzwerkschicht adressiert?",
            answers: ["Mit IP-Adressen", "Mit IP"],
            correct: ["MIT IP-ADRESSEN", "MIT IP"]
        },
        {
            question: "Wie wird auf der Netzzugangsschicht adressiert?",
            answers: ["Mit MAC-Adressen", "Mit MAC"],
            correct: ["MIT MAC-ADRESSEN", "MIT MAC"]
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
            question: "Wie heißt die erste Verkabelungsebene in der UGV?",
            answers: ["Primärbereich", "Campus"],
            correct: ["PRIMÄRBEREICH", "CAMPUS"]
        },
        {
            question: "Wie heißt die zweite Verkabelungsebene in der UGV?",
            answers: ["Sekundärbereich", "Vertikalverkabelung"],
            correct: ["SEKUNDÄRBEREICH", "VERTIKALVERKABELUNG"]
        },
        {
            question: "Wie heißt die dritte Verkabelungsebene in der UGV?",
            answers: ["Tertiärbereich", "Horizontalverkabelung"],
            correct: ["TERTIÄRBEREICH", "HORIZONTALVERKABELUNG"]
        },
        {
            question: "Was bedeutet die Abkürzung GV in der Gebäudeverkabelung?",
            answers: ["Gebäudeverkabelung"],
            correct: ["GEBÄUDEVERKABELUNG"]
        },
        {
            question: "Was bedeutet die Abkürzung SV in der Gebäudeverkabelung?",
            answers: ["Standortverteiler"],
            correct: ["STANDORTVERTEILER"]
        },
        {
            question: "Was bedeutet die Abkürzung EV in der Gebäudeverkabelung?",
            answers: ["Etagenverteiler"],
            correct: ["ETAGENVERTEILER"]
        },
        {
            question: "Welche Norm wird für RJ45-Stecker verwendet?",
            answers: ["8P8C", "8 Positionen 8 Kontakte"],
            correct: ["8P8C", "8 POSITIONEN 8 KONTAKTE"]
        },
        {
            question: "Was ist eine Anschlussdose?",
            answers: ["Eine Wanddose zur Verbindung von Patchkabeln mit Installationskabeln"],
            correct: ["EINE WANDDOSE ZUR VERBINDUNG VON PATCHKABELN MIT INSTALLATIONSKABELN"]
        },
        {
            question: "Was ist ein Anschlussmodul?",
            answers: ["Ein Modul mit mehreren Anschlüssen im Rangierfeld"],
            correct: ["EIN MODUL MIT MEHREREN ANSCHLÜSSEN IM RANGIERFELD"]
        },
        {
            question: "Erklären Sie den Unterschied zwischen Anschlussdose und Anschlussmodul:",
            answers: ["Anschlussdose ist an der Wand, Anschlussmodul ist im Rangierfeld"],
            correct: ["ANSCHLUSSDOSE IST AN DER WAND, ANSCHLUSSMODUL IST IM RANGIERFELD"]
        },
        {
            question: "Wie heißt das Gerät, auf dem die Installationskabel terminiert werden?",
            answers: ["Rangierfeld", "Patchpanel"],
            correct: ["RANGIERFELD", "PATCHPANEL"]
        },
        {
            question: "Wozu dient das Rangierfeld?",
            answers: ["Zur Verbindung und Verwaltung von Netzwerkkabeln"],
            correct: ["ZUR VERBINDUNG UND VERWALTUNG VON NETZWERKKABELN"]
        },
        {
            question: "Welcher UGV-Bereich deckt die Glasfaserverbindung vom Keller in die Etagen eines Gebäudes ab?",
            answers: ["Sekundärbereich", "Vertikalverkabelung"],
            correct: ["SEKUNDÄRBEREICH", "VERTIKALVERKABELUNG"]
        },
        {
            question: "Zu welchem UGV-Bereich gehören die Anschlussdosen?",
            answers: ["Tertiärbereich", "Horizontalverkabelung"],
            correct: ["TERTIÄRBEREICH", "HORIZONTALVERKABELUNG"]
        }
    ],

    medien: [
        {
            question: "Aus welchem Material besteht Glasfaser?",
            answers: ["Glas", "Siliziumdioxid"],
            correct: ["GLAS", "SILIZIUMDIOXID"]
        },
        {
            question: "Wie heißt Glasfaser noch?",
            answers: ["LWL", "Lichtwellenleiter"],
            correct: ["LWL", "LICHTWELLENLEITER"]
        },
        {
            question: "Welches Übertragungsmedium ermöglicht die höchste Bandbreite?",
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
            question: "Was ist ein Vorteil von Glasfaser gegenüber Kupfer?",
            answers: ["Grössere Bandbreite, weniger Dämpfung, immun gegen elektromagnetische Interferenz"],
            correct: ["GRÖSSERE BANDBREITE, WENIGER DÄMPFUNG, IMMUN GEGEN ELEKTROMAGNETISCHE INTERFERENZ"]
        },
        {
            question: "Nenne zwei Nachteile der Glasfaserverkabelung gegenüber Kupfer:",
            answers: ["Höhere Kosten, spezielle Werkzeuge nötig"],
            correct: ["HÖHERE KOSTEN, SPEZIELLE WERKZEUGE NÖTIG"]
        },
        {
            question: "Was ist ein Nachteil von Funk/WLAN?",
            answers: ["Begrenzte Reichweite, Interferenzen, niedrigere Bandbreite als Kabel"],
            correct: ["BEGRENZTE REICHWEITE, INTERFERENZEN, NIEDRIGERE BANDBREITE ALS KABEL"]
        },
        {
            question: "Wieso hat Wireless-LAN Kupferverkabelung noch nicht vollständig abgelöst?",
            answers: ["Funk hat geringere Bandbreite und Reichweite"],
            correct: ["FUNK HAT GERINGERE BANDBREITE UND REICHWEITE"]
        },
        {
            question: "Wie weit kann sich ein Netzwerk über Glasfaser ausdehnen?",
            answers: ["über 100 km", "Mehrere Kilometer"],
            correct: ["ÜBER 100 KM", "MEHRERE KILOMETER"]
        },
        {
            question: "Was ist ein 4G-Router?",
            answers: ["Ein Router, der sich über das 4G-Mobilfunknetz mit dem Internet verbindet"],
            correct: ["EIN ROUTER, DER SICH ÜBER DAS 4G-MOBILFUNKNETZ MIT DEM INTERNET VERBINDET"]
        },
        {
            question: "Nenne einen Vorteil eines 4G-Routers gegenüber einem DSL-Router:",
            answers: ["Unabhängig von Festnetz, schnellerer Aufbau, flexibler"],
            correct: ["UNABHÄNGIG VON FESTNETZ, SCHNELLERER AUFBAU, FLEXIBLER"]
        },
        {
            question: "Nenne einen Nachteil eines 4G-Routers gegenüber einem DSL-Router:",
            answers: ["Limitiertes Datenkontingent, höhere Kosten, langsamere Geschwindigkeit"],
            correct: ["LIMITIERTES DATENKONTINGENT, HÖHERE KOSTEN, LANGSAMERE GESCHWINDIGKEIT"]
        }
    ],

    geraete: [
        {
            question: "Was ist eine NIC?",
            answers: ["Netzwerkschnittstellenkarte", "Network Interface Card"],
            correct: ["NETZWERKSCHNITTSTELLENKARTE", "NETWORK INTERFACE CARD"]
        },
        {
            question: "Auf welcher Schicht arbeitet eine NIC?",
            answers: ["Schicht 1", "Physical", "Layer 1"],
            correct: ["SCHICHT 1", "PHYSICAL", "LAYER 1"]
        },
        {
            question: "Auf welcher Schicht arbeitet ein Repeater?",
            answers: ["Schicht 1", "Physical", "Layer 1"],
            correct: ["SCHICHT 1", "PHYSICAL", "LAYER 1"]
        },
        {
            question: "Was ist die Funktion eines Repeaters?",
            answers: ["Signalverstärkung zur Ausdehnungsbereichserweiterung"],
            correct: ["SIGNALVERSTÄRKUNG ZUR AUSDEHNUNGSBEREICHSERWEITERUNG"]
        },
        {
            question: "Welches Gerät wandelt Lichtsignale in elektrische Signale um?",
            answers: ["Media Converter"],
            correct: ["MEDIA CONVERTER"]
        },
        {
            question: "Erklären Sie den Begriff Media Converter:",
            answers: ["Ein Gerät, das zwischen zwei verschiedenen Übertragungsmedien konvertiert"],
            correct: ["EIN GERÄT, DAS ZWISCHEN ZWEI VERSCHIEDENEN ÜBERTRAGUNGSMEDIEN KONVERTIERT"]
        },
        {
            question: "Auf welcher Schicht arbeitet ein Hub?",
            answers: ["Schicht 1", "Physical Layer", "Layer 1"],
            correct: ["SCHICHT 1", "PHYSICAL LAYER", "LAYER 1"]
        },
        {
            question: "Was ist die Funktion eines Hub?",
            answers: ["Verbindung mehrerer Netzwerksegmente auf Schicht 1"],
            correct: ["VERBINDUNG MEHRERER NETZWERKSEGMENTE AUF SCHICHT 1"]
        },
        {
            question: "Auf welcher Schicht arbeitet ein Switch?",
            answers: ["Schicht 2", "Data Link Layer", "Layer 2"],
            correct: ["SCHICHT 2", "DATA LINK LAYER", "LAYER 2"]
        },
        {
            question: "Erklären Sie den Unterschied zwischen Switch und Hub:",
            answers: ["Hub arbeitet auf Schicht 1, Switch auf Schicht 2", "Switch filtert Frames, Hub nicht"],
            correct: ["HUB ARBEITET AUF SCHICHT 1, SWITCH AUF SCHICHT 2", "SWITCH FILTERT FRAMES, HUB NICHT"]
        },
        {
            question: "Was ist der Vorteil eines Switch gegenüber einem Hub?",
            answers: ["Höhere Effizienz, weniger Kollisionen, bessere Bandbreitennutzung"],
            correct: ["HÖHERE EFFIZIENZ, WENIGER KOLLISIONEN, BESSERE BANDBREITENNUTZUNG"]
        },
        {
            question: "Auf welcher Schicht arbeitet ein Router?",
            answers: ["Schicht 3", "Network Layer", "Layer 3", "Netzwerkschicht"],
            correct: ["SCHICHT 3", "NETWORK LAYER", "LAYER 3", "NETZWERKSCHICHT"]
        },
        {
            question: "Was ist die Funktion eines Router?",
            answers: ["Verbindung verschiedener Netzwerke und Weiterleitung von Paketen"],
            correct: ["VERBINDUNG VERSCHIEDENER NETZWERKE UND WEITERLEITUNG VON PAKETEN"]
        },
        {
            question: "Erklären Sie den Unterschied zwischen Router und Switch:",
            answers: ["Router arbeitet auf Schicht 3, Switch auf Schicht 2", "Router verbindet Netzwerke, Switch verbindet Geräte"],
            correct: ["ROUTER ARBEITET AUF SCHICHT 3, SWITCH AUF SCHICHT 2", "ROUTER VERBINDET NETZWERKE, SWITCH VERBINDET GERÄTE"]
        },
        {
            question: "Was ist die Funktion eines Modem?",
            answers: ["Umwandlung zwischen digitalen und analogen Signalen"],
            correct: ["UMWANDLUNG ZWISCHEN DIGITALEN UND ANALOGEN SIGNALEN"]
        },
        {
            question: "Ein Modem übersetzt grundsätzlich nur verschiedene Netzwerkprotokolle (wahr/falsch)?",
            answers: ["falsch"],
            correct: ["FALSCH"]
        },
        {
            question: "Was ist die Grundfunktion einer Firewall?",
            answers: ["Kontrolle des Datenverkehrs zwischen Netzwerken", "Filtern von Datenpaketen"],
            correct: ["KONTROLLE DES DATENVERKEHRS ZWISCHEN NETZWERKEN", "FILTERN VON DATENPAKETEN"]
        },
        {
            question: "Ein Switch erzeugt welche Art von Bereich?",
            answers: ["Collision Domain", "Broadcast Domain"],
            correct: ["COLLISION DOMAIN", "BROADCAST DOMAIN"]
        },
        {
            question: "Ein Router trennt welche Art von Bereich?",
            answers: ["Broadcast Domain"],
            correct: ["BROADCAST DOMAIN"]
        },
        {
            question: "Ein WLAN-Access-Point ist ein Spezialfall unter den Media-Convertern (wahr/falsch)?",
            answers: ["wahr"],
            correct: ["WAHR"]
        },
        {
            question: "Als Netzwerkgerät ist jede Firewall gleichzeitig auch ein Router (wahr/falsch)?",
            answers: ["falsch"],
            correct: ["FALSCH"]
        },
        {
            question: "Eine Firewall verbindet Netze, während ein Switch nur Geräte verbindet (wahr/falsch)?",
            answers: ["wahr"],
            correct: ["WAHR"]
        }
    ],

    firewall: [
        {
            question: "Was ist ein Bastion Host?",
            answers: ["Ein isolierter Computer, der als Schutz zwischen Netzwerken fungiert"],
            correct: ["EIN ISOLIERTER COMPUTER, DER ALS SCHUTZ ZWISCHEN NETZWERKEN FUNGIERT"]
        },
        {
            question: "Für wen ist ein Bastion Host typischerweise geeignet?",
            answers: ["Für Private, welche keine Internetdienste anbieten"],
            correct: ["FÜR PRIVATE, WELCHE KEINE INTERNETDIENSTE ANBIETEN"]
        },
        {
            question: "Was ist eine Three-Homed Firewall?",
            answers: ["Eine Firewall mit drei Netzwerkschnittstellen"],
            correct: ["EINE FIREWALL MIT DREI NETZWERKSCHNITTSTELLEN"]
        },
        {
            question: "Welche drei Netzwerk-Zonen verbindet eine Three-Homed Firewall?",
            answers: ["LAN, DMZ, Internet", "internes Netzwerk, DMZ, externes Netzwerk"],
            correct: ["LAN, DMZ, INTERNET", "INTERNES NETZWERK, DMZ, EXTERNES NETZWERK"]
        },
        {
            question: "Wie heißt die Netzwerk-Zone zwischen dem internen Netzwerk und dem Internet?",
            answers: ["DMZ", "Demilitarized Zone"],
            correct: ["DMZ", "DEMILITARIZED ZONE"]
        },
        {
            question: "Erklären Sie den Begriff DMZ:",
            answers: ["Eine Netzwerkzone zwischen dem internen Netzwerk und dem Internet für Server"],
            correct: ["EINE NETZWERKZONE ZWISCHEN DEM INTERNEN NETZWERK UND DEM INTERNET FÜR SERVER"]
        },
        {
            question: "Welche Server befinden sich typischerweise in der DMZ?",
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
            question: "Welcher Hauptunterschied besteht zwischen Three-Homed-Firewall und Screened Subnet?",
            answers: ["Three-Homed hat eine Firewall mit 3 Interfaces, Screened Subnet hat zwei Firewalls"],
            correct: ["THREE-HOMED HAT EINE FIREWALL MIT 3 INTERFACES, SCREENED SUBNET HAT ZWEI FIREWALLS"]
        },
        {
            question: "Auf welcher Schicht arbeitet eine Firewall primär?",
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
            question: "Was ist Proxy-Filtering?",
            answers: ["Ein Firewall-Typ, der als Vermittler zwischen Clients und Servern agiert"],
            correct: ["EIN FIREWALL-TYP, DER ALS VERMITTLER ZWISCHEN CLIENTS UND SERVERN AGIERT"]
        },
        {
            question: "Nenne die Komponenten einer DMZ-Architektur:",
            answers: ["Zwei Firewalls, internes Netzwerk, DMZ, Internet"],
            correct: ["ZWEI FIREWALLS, INTERNES NETZWERK, DMZ, INTERNET"]
        }
    ],

    protokolle: [
        {
            question: "Wofür steht IP?",
            answers: ["Internet Protocol"],
            correct: ["INTERNET PROTOCOL"]
        },
        {
            question: "Wofür steht ARP?",
            answers: ["Address Resolution Protocol"],
            correct: ["ADDRESS RESOLUTION PROTOCOL"]
        },
        {
            question: "Was ist die Funktion von ARP?",
            answers: ["Auflösung von IP-Adressen zu MAC-Adressen"],
            correct: ["AUFLÖSUNG VON IP-ADRESSEN ZU MAC-ADRESSEN"]
        },
        {
            question: "Wofür steht DHCP?",
            answers: ["Dynamic Host Configuration Protocol"],
            correct: ["DYNAMIC HOST CONFIGURATION PROTOCOL"]
        },
        {
            question: "Was ist die Funktion von DHCP?",
            answers: ["Automatische Vergabe von IP-Adressen an Netzwerkgeräte"],
            correct: ["AUTOMATISCHE VERGABE VON IP-ADRESSEN AN NETZWERKGERÄTE"]
        },
        {
            question: "Welche Informationen vergibt ein DHCP-Server?",
            answers: ["IP-Adresse, Subnetzmaske, Gateway, DNS-Server"],
            correct: ["IP-ADRESSE, SUBNETZMASKE, GATEWAY, DNS-SERVER"]
        },
        {
            question: "Wofür steht DNS?",
            answers: ["Domain Name System"],
            correct: ["DOMAIN NAME SYSTEM"]
        },
        {
            question: "Was ist die Funktion von DNS?",
            answers: ["Auflösung von Domainnamen zu IP-Adressen"],
            correct: ["AUFLÖSUNG VON DOMAINNAMEN ZU IP-ADRESSEN"]
        },
        {
            question: "Nenne ein Beispiel für einen DNS-Server:",
            answers: ["8.8.8.8", "1.1.1.1", "208.67.222.222"],
            correct: ["8.8.8.8", "1.1.1.1", "208.67.222.222"]
        },
        {
            question: "Was ist ein IP-Hostname?",
            answers: ["Ein Name, der einem Computer im Netzwerk zugewiesen wird"],
            correct: ["EIN NAME, DER EINEM COMPUTER IM NETZWERK ZUGEWIESEN WIRD"]
        }
    ],

    dienste: [
        {
            question: "Was ist eine Netzwerkfreigabe (Share)?",
            answers: ["Ein gemeinsamer Ordner oder Ressource, die über das Netzwerk zugänglich ist"],
            correct: ["EIN GEMEINSAMER ORDNER ODER RESSOURCE, DIE ÜBER DAS NETZWERK ZUGÄNGLICH IST"]
        },
        {
            question: "Was sind Berechtigungen bei Netzwerkfreigaben?",
            answers: ["Einstellungen, die definieren, wer auf Ressourcen zugreifen darf"],
            correct: ["EINSTELLUNGEN, DIE DEFINIEREN, WER AUF RESSOURCEN ZUGREIFEN DARF"]
        },
        {
            question: "Nenne drei typische Berechtigungsstufen:",
            answers: ["Lesen, Schreiben, Löschen", "Vollzugriff, Ändern, Lesen"],
            correct: ["LESEN, SCHREIBEN, LÖSCHEN", "VOLLZUGRIFF, ÄNDERN, LESEN"]
        },
        {
            question: "Was ist ein wichtiges Netzwerk-Tool zur Problemdiagnose?",
            answers: ["ping", "ipconfig", "tracert", "nslookup"],
            correct: ["PING", "IPCONFIG", "TRACERT", "NSLOOKUP"]
        },
        {
            question: "Was tut der Befehl 'ping'?",
            answers: ["Testet die Verbindung zu einem Host"],
            correct: ["TESTET DIE VERBINDUNG ZU EINEM HOST"]
        },
        {
            question: "Was tut der Befehl 'ipconfig'?",
            answers: ["Zeigt die aktuelle IP-Konfiguration des Computers"],
            correct: ["ZEIGT DIE AKTUELLE IP-KONFIGURATION DES COMPUTERS"]
        }
    ]
};