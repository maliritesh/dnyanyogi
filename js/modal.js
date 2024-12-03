// Open Modal Function
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
  }
  
  // Close Modal Function
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
  }
  
  // Close the modal if the user clicks outside of it
  window.onclick = function(event) {
    // Check if the click is outside of a modal content
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      if (event.target === modal) {
        closeModal(modal.id);
      }
    });
  }

// For News Paper Links
  function openKannada() {
    window.open("https://kpepaper.asianetnews.com/", "_blank");
}
function openNews18() {
    window.open("https://kannada.news18.com/", "_blank");
}
function openHosa() {
    window.open("http://www.hosadigantha.in/", "_blank");
}
function openDailyhunt() {
    window.open("https://m.dailyhunt.in/news/india/english/for+you?launch=true&mode=pwa", "_blank");
}
function openPrajavani() {
    window.open("https://www.prajavani.net/", "_blank");
}
function openUday() {
    window.open("https://epaper.udayavani.com/", "_blank");
}
function openSanje() {
    window.open("https://sanjevani.co.in/", "_blank");
}
function openDeccan() {
    window.open("https://www.deccanherald.com/", "_blank");
}
  
// For E-Learning modal
function openLearn1() {
    window.open("https://www.academicinfo.net/eddist.html", "_blank");
}

function openLearn2() {
    window.open("https://videolectures.net/", "_blank");
}
function openLearn3() {
    window.open("https://www.youtube.com/watch?v=dLsmtzGjAeI", "_blank");
}
function openLearn4() {
    window.open("https://www.youtube.com/watch?v=6qD7L2W_ssk", "_blank");
}
function openLearn5() {
    window.open("https://www.youtube.com/watch?v=40D1_ReWz1E", "_blank");
}
function openLearn6() {
    window.open("https://www.youtube.com/watch?v=FlisUOIwOnw", "_blank");
}
function openLearn7() {
    window.open("https://www.youtube.com/watch?v=n5vjCqnVb6s", "_blank");
}
function openLearn8() {
    window.open("https://www.youtube.com/watch?v=Q6Gw08pwhws&list=PLGj9lfgFsT5c4mBulXGP2LFoAPcCW0r9H", "_blank");
}
function openLearn9() {
    window.open("https://www.youtube.com/watch?v=PiaPIleRhgQ", "_blank");
}
function openLearn10() {
    window.open("https://www.youtube.com/watch?v=iK3M4o-MrA4", "_blank");
}
function openLearn11() {
    window.open("https://www.youtube.com/watch?v=qrC8Lhl82Ms", "_blank");
}

// For Ebook Modal
function openEbook1() {
    window.open("https://books.google.co.in/", "_blank");
}
function openEbook2() {
    window.open("https://www.freebookscity.com/?language=EN&gad_source=1&gclid=CjwKCAjwufq2BhAmEiwAnZqw8oRmDvVuXt6YxhnHLaxhr9HK-yzk4YE85fbs53GwrE9cI4wO4hQb3hoCbIEQAvD_BwE", "_blank");
}
function openEbook3() {
    window.open("https://www.barnesandnoble.com/", "_blank");
}
function openEbook4() {
    window.open("https://play.google.com/store/books?pli=1", "_blank");
}
function openEbook5() {
    window.open("https://kannadasahithyaparishattu.in/%E0%B2%AE%E0%B3%81%E0%B2%95%E0%B3%8D%E0%B2%A4%E0%B2%9C%E0%B3%8D%E0%B2%9E%E0%B2%BE%E0%B2%A8/", "_blank");
}
function openEbook6() {
    window.open("https://www.goodreads.com/", "_blank");
}
function openEbook7() {
    window.open("https://www.forgottenbooks.com/en", "_blank");
}
function openEbook8() {
    window.open("https://www.kobo.com/", "_blank");
}

// For E-Journal Modal
function openEjournal1() {
    window.open("https://nlist.inflibnet.ac.in/", "_blank");
}
function openEjournal2() {
    window.open("https://www.ias.ac.in/listing/issues/reso", "_blank");
}
function openEjournal3() {
    window.open("https://sahityaamrit.in/", "_blank");
}
function openEjournal4() {
    window.open("http://www.everywritersresource.com/topliterarymagazines.html", "_blank");
}
function openEjournal5() {
    window.open("http://yojana.gov.in/", "_blank");
}
function openEjournal6() {
    window.open("http://hosathumonthly.blogspot.in/", "_blank");
}
function openEjournal7() {
    window.open("https://iasexamportal.com/tag/kurukshetra", "_blank");
}
function openEjournal8() {
    window.open("http://emagazine.pdgroup.in/", "_blank");
}
function openEjournal9() {
    window.open("https://www.cribfb.com/Ejournal/index.php/ijfb", "_blank");
}
function openEjournal10() {
    window.open("https://csulb.libguides.com/c.php?g=39192&p=249957", "_blank");
}
function openEjournal11() {
    window.open("http://www.southerneconomic.org/", "_blank");
}
function openEjournal12() {
    window.open("http://www.elsevier.com/Ejournals/title/a", "_blank");
}
function openEjournal13() {
    window.open("http://competitionaffairs.blogspot.in/p/indian-english-magazines-online.html", "_blank");
}
function openEjournal14() {
    window.open("http://www.ias.ac.in/jaa/", "_blank");
}
function openEjournal15() {
    window.open("http://samvada.org/", "_blank");
}
function openEjournal16() {
    window.open("http://Ejournalseeker.researchbib.com/?action=viewEjournalDetails&issn=09723269", "_blank");
}
function openEjournal17() {
    window.open("https://www.icai.org/category/e-Ejournal", "_blank");
}
function openEjournal18() {
    window.open("http://www.intechopen.com/", "_blank");
}
function openEjournal19() {
    window.open("http://www.currentscience.ac.in/", "_blank");
}
function openEjournal20() {
    window.open("https://www.indianEjournalofmanagement.com/", "_blank");
}
function openJournal21() {
    window.open("https://kannada.oneindia.com/column/periodicals/2009/1204-tingalu-kannada-periodical-mysuru-basavaraju.html", "_blank");
}


// Government Sites

function openPMO() {
    window.open("https://x.com/pmoindia", "_blank");  
}

function openPOI() {
    window.open("https://presidentofindia.gov.in/", "_blank");   
}
function openVOI() {
    window.open("http://vicepresidentofindia.nic.in/", "_blank");   
}
function openMIN() {
    window.open("http://goidirectory.gov.in/union_categories.php?ct=E002", "_blank");   
}
function openPMOFFICE() {
    window.open("https://www.pmindia.gov.in/en/", "_blank");   
}
function openDEPRT() {
    window.open("https://igod.gov.in/", "_blank");   
}
function openPOAI() {
    window.open("https://igod.gov.in/", "_blank");   
}
function openRS() {
    window.open("https://igod.gov.in/", "_blank");   
}
function openLS() {
    window.open("https://igod.gov.in/", "_blank");   
}

function openSLA() {
    window.open("https://igod.gov.in/", "_blank");   
}
function openSLC() {
    window.open("https://igod.gov.in/", "_blank");   
}
function openOthers() {
    window.open("https://igod.gov.in/", "_blank");   
}
function openSCOI() {
    window.open("https://igod.gov.in/", "_blank");   
}
function openHC() {
    window.open("https://igod.gov.in/", "_blank");   
}
function openDC() {
    window.open("https://igod.gov.in/", "_blank");   
}

// Competative Exams

function openIAS() {
    window.open("https://byjus.com/free-ias-prep/upsc-2018-prelims-and-mains-question-papers-pdf/", "_blank");   
}
function openIPS() {
    window.open("https://www.clearias.com/upsc-civil-services-exam-previous-year-question-papers-ias-ips/", "_blank");   
}
function openKPSC() {
    window.open("https://kpsc.kar.nic.in/questionpaper.html", "_blank");   
}
function openBANK() {
    window.open("https://bankexamportal.com/papers", "_blank");   
}
function openNET() {
    window.open("https://www.ugcnetonline.in/previous_question_papers.php", "_blank");   
}
function openRAIL() {
    window.open("https://governmentadda.com/rrb-alp-previous-papers-pdf-railway-technician-solved-papers-free-download/", "_blank");   
}

// Higher Studies
function openDelhi() {
    window.open("https://www.ugc.gov.in/", "_blank");   
}
function openKSOU() {
    window.open("https://www.ksoumysuru.ac.in/", "_blank");   
}
function openDU() {
    window.open("https://davangereuniversity.ac.in/", "_blank");   
}
function openKU() {
    window.open("http://www.kuvempu.ac.in/kan/index.php", "_blank");   
}
function openRCU() {
    window.open("https://rcub.ac.in/", "_blank");   
}
function openUM() {
    window.open("https://uni-mysore.ac.in/Kannada/home.php", "_blank");   
}
function openKUH() {
    window.open("https://kannadauniversity.org/english/", "_blank");   
}
function openBU() {
    window.open("https://bangaloreuniversity.karnataka.gov.in/", "_blank");   
}
function openMU() {
    window.open("https://www.mangaloreuniversity.ac.in/", "_blank");   
}
function openKUD() {
    window.open("https://www.kud.ac.in/", "_blank");   
}
function openKSLU() {
    window.open("https://kslu.karnataka.gov.in/english", "_blank");   
}
function openTU() {
    window.open("http://tumkuruniversity.ac.in/", "_blank");   
}

// Student Corner
function openUUCMS() {
    window.open("https://uucms.karnataka.gov.in/", "_blank");   
}
function openDIGI() {
    window.open("https://www.digilocker.gov.in/", "_blank");   
}
function openDL() {
    window.open("https://www.karnatakadigitalpubliclibrary.org/", "_blank");   
}
function openLE() {
    window.open("https://www.youtube.com/results?search_query=learn+english", "_blank");   
}
function openRB() {
    window.open("https://www.youtube.com/results?search_query=how+to+build+effective+resume", "_blank");   
}
function openFI() {
    window.open("https://www.youtube.com/results?search_query=how+to+face+interview+", "_blank");   
}

function openDCE() {
    window.open("https://dce.karnataka.gov.in/", "_blank");   
}

// E-Magzine
function openMagzine1() {
    window.open("http://www.karmaveera.com/t/313", "_blank");   
}
function openMagzine2() {
    window.open("http://www.sudhaezine.com/", "_blank");   
}
function openMagzine3() {
    window.open("http://sakhiexpress.epapr.in/t/3516", "_blank");   
}
function openMagzine4() {
    window.open("http://mayuraezine.com/thankyou.php", "_blank");   
}
function openMagzine5() {
    window.open("https://www.readwhere.com/magazine/bhavana-prakashana/O-Manase/O-Manase-100/358086#preview", "_blank");   
}
function openMagzine6() {
    window.open("http://www.worldmag.com/", "_blank");   
}
function openMagzine7() {
    window.open("https://lj.libraryjournal.com/", "_blank");   
}
function openMagzine8() {
    window.open("http://www.magatopia.com/magazines/Electronic_Telegraph.html?page=news.html", "_blank");   
}
function openMagzine9() {
    window.open("https://www.spark-online.com/", "_blank");   
}
function openMagzine10() {
    window.open("https://www.vervemagazine.in/", "_blank");   
}
function openMagzine11() {
    window.open("https://tehelka.com/category/tehelkadaily/", "_blank");   
}
function openMagzine12() {
    window.open("http://www.filmfare.com/", "_blank");   
}
function openMagzine13() {
    window.open("http://www.flakmag.com/", "_blank");   
}
function openMagzine14() {
    window.open("https://www.employmentnews.gov.in/", "_blank");   
}
function openMagzine15() {
    window.open("http://discovermagazine.com/", "_blank");   
}
function openMagzine16() {
    window.open("https://www.britannica.com/", "_blank");   
}

function openBA() {
    window.open("https://drive.google.com/drive/folders/1F0CEAtoFmji9Gx9snSGZYqEksw4VkjSW", "_blank");   
}
function openEdictionary() {
    window.open("https://www.thefreedictionary.com/", "_blank");   
}
