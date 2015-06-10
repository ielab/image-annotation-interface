

(function() {

	var app = angular.module('cdsQuerygen', ['ngCookies']);

	app.config(function($interpolateProvider) {
		$interpolateProvider.startSymbol('{$');
		$interpolateProvider.endSymbol('$}');
	});

	
	app.controller('PatientController', ['$http', '$location', '$cookies', function($http, $location, $cookies){
		this.currentKeywords = "";
		this.patients = cdsPatients;
		

		// var patientCtrl = this;
		// $http.get('http://localhost:8000/queries').success(function(data) {
		// 	metadataCtrl.otherpatients = data;
		// });

		var patientCtrl = this;
		this.addKeywords = function(patient) {
			patient.keywords.push(this.currentKeywords);

			var keywords = {}
			keywords["qId"] = patient.qId;
			keywords["keywords"] = this.currentKeywords;

			$http.defaults.headers.post['X-CSRFToken'] = $cookies.csrftoken;
			$http.post('http://localhost:8000/queries/', keywords).success(function(data) {
				// patientCtrl.result = data;
				patientCtrl.currentKeywords = "";
			}).error(function(data, status, headers, config) {
				alert("error on post");
		        console.log(data);
            });

			
		};





	}]);


	

	// set the initial keyboard focus to a specific HTML element
	// set via "focus" attribute, e.g., <input focus="true">
	app.directive('focus', function($timeout) {
		return {
			scope : {
				trigger : '@focus'
			},
			link : function(scope, element) {
				scope.$watch('trigger', function(value) {
					if (value === "true") {
						$timeout(function() {
							element[0].focus();
						});
					}
				});
			}
		};
	}); 

	var cdsPatients = [
    {
        "description": "A 58-year-old African-American woman presents to the ER with episodic pressing/burning anterior chest pain that began two days earlier for the first time in her life. The pain started while she was walking, radiates to the back, and is accompanied by nausea, diaphoresis and mild dyspnea, but is not increased on inspiration. The latest episode of pain ended half an hour prior to her arrival. She is known to have hypertension and obesity. She denies smoking, diabetes, hypercholesterolemia, or a family history of heart disease. She currently takes no medications. Physical examination is normal. The EKG shows nonspecific changes.",
        "type": "diagnosis",
        "keywords": [],
        "qId": "trec2014-1"
    },
    {
        "description": "An 8-year-old male presents in March to the ER with fever up to 39 C, dyspnea and cough for 2 days. He has just returned from a 5 day vacation in Colorado. Parents report that prior to the onset of fever and cough, he had loose stools. He denies upper respiratory tract symptoms. On examination he is in respiratory distress and has bronchial respiratory sounds on the left. A chest x-ray shows bilateral lung infiltrates.",
        "type": "diagnosis",
        "keywords": [],
        "qId": "trec2014-2"
    },
    {
        "description": "A 58-year-old nonsmoker white female with mild exertional dyspnea and occasional cough is found to have a left lung mass on chest x-ray. She is otherwise asymptomatic. A neurologic examination is unremarkable, but a CT scan of the head shows a solitary mass in the right frontal lobe.",
        "type": "diagnosis",
        "keywords": [],
        "qId": "trec2014-3"
    },
    {
        "description": "A 2-year-old boy is brought to the emergency department by his parents for 5 days of high fever and irritability. The physical exam reveals conjunctivitis, strawberry tongue, inflammation of the hands and feet, desquamation of the skin of the fingers and toes, and cervical lymphadenopathy with the smallest node at 1.5 cm. The abdominal exam demonstrates tenderness and enlarged liver. Laboratory tests report elevated alanine aminotransferase, white blood cell count of 17,580/mm, albumin 2.1 g/dL, C-reactive protein 4.5 mg, erythrocyte sedimentation rate 60 mm/h, mild normochromic, normocytic anemia, and leukocytes in urine of 20/mL with no bacteria identified. The echocardiogram shows moderate dilation of the coronary arteries with possible coronary artery aneurysm.",
        "type": "diagnosis",
        "keywords": [],
        "qId": "trec2014-4"
    },
    {
        "description": "A 56-year-old female on 20th day post-left mastectomy presents to the emergency department complaining of shortness of breath and malaise. The patient says that she has remained in bed for the last two weeks. The physical examination reveals tenderness on the left upper thoracic wall and right calf. The surgical incision shows no bleeding or signs of infection. Pulmonary auscultation is significant for bilateral decreased breath sounds, especially at the right base. Laboratory tests reveal an elevated D-dimer.",
        "type": "diagnosis",
        "keywords": [],
        "qId": "trec2014-5"
    },
    {
        "description": "64-year-old obese female with diagnosis of diabetes mellitus and persistently elevated HbA1c. She is reluctant to see a nutritionist and is not compliant with her diabetes medication or exercise. She complains of a painful skin lesion on the left lower leg. She has tried using topical lotions and creams but the lesion has increased in size and is now oozing.",
        "type": "diagnosis",
        "keywords": [],
        "qId": "trec2014-6"
    },
    {
        "description": "A 26-year-old obese woman with a history of bipolar disorder complains that her recent struggles with her weight and eating have caused her to feel depressed. She states that she has recently had difficulty sleeping and feels excessively anxious and agitated. She also states that she has had thoughts of suicide. She often finds herself fidgety and unable to sit still for extended periods of time. Her family tells her that she is increasingly irritable. Her current medications include lithium carbonate and zolpidem.",
        "type": "diagnosis",
        "keywords": [],
        "qId": "trec2014-7"
    },
    {
        "description": "A 62-year-old man sees a neurologist for progressive memory loss and jerking movements of the lower extremities. Neurologic examination confirms severe cognitive deficits and memory dysfunction. An electroencephalogram shows generalized periodic sharp waves. Neuroimaging studies show moderately advanced cerebral atrophy. A cortical biopsy shows diffuse vacuolar changes of the gray matter with reactive astrocytosis but no inflammatory infiltration.",
        "type": "diagnosis",
        "keywords": [],
        "qId": "trec2014-8"
    },
    {
        "description": "A 43-year-old woman visits her dermatologist for lesions on her neck. On examination, multiple lesions are seen. Each lesion is small soft, and pedunculated. The largest lesion is about 4 mm in diameter. The color of different lesions varies from flesh colored to slightly hyperpigmented.",
        "type": "diagnosis",
        "keywords": [],
        "qId": "trec2014-9"
    },
    {
        "description": "A physician is called to see a 67-year-old woman who underwent cardiac catheterization via the right femoral artery earlier in the morning. She is now complaining of a cool right foot. Upon examination she has a pulsatile mass in her right groin with loss of distal pulses, and auscultation reveals a bruit over the point at which the right femoral artery was entered.",
        "type": "diagnosis",
        "keywords": [],
        "qId": "trec2014-10"
    },
    {
        "description": "A 40-year-old woman with no past medical history presents to the ER with excruciating pain in her right arm that had started 1 hour prior to her admission. She denies trauma. On examination she is pale and in moderate discomfort, as well as tachypneic and tachycardic. Her body temperature is normal and her blood pressure is 80/60. Her right arm has no discoloration or movement limitation.",
        "type": "test",
        "keywords": [],
        "qId": "trec2014-11"
    },
    {
        "description": "A 25-year-old woman presents to the clinic complaining of prolonged fatigue. She denies difficulty sleeping and sleeps an average of 8 hours a night. She also notes hair loss, a change in her voice and weight gain during the previous 6 months. She complains of cold intolerance. On examination she has a prominent, soft, uniform anterior cervical mass at the midline.",
        "type": "test",
        "keywords": [],
        "qId": "trec2014-12"
    },
    {
        "description": "A 30-year-old generally healthy woman presents with shortness of breath that had started 2 hours before admission. She has had no health problems in the past besides 2 natural abortions. She had given birth to a healthy child 3 weeks before. On examination, she is apprehensive, tachypneic and tachycardic, her blood pressure is 110/70 and her oxygen saturation 92%. Otherwise, physical examination is unremarkable. Her chest x-ray and CBC are normal.",
        "type": "test",
        "keywords": [],
        "qId": "trec2014-13"
    },
    {
        "description": "An 85-year-old man is brought to the ER because of gradual decrease in his level of consciousness. In the last 3 days he stopped walking and eating by himself. He has had no fever, cough, rash or diarrhea. His daughter recalls that he had been involved in a car accident 3 weeks prior to his admission and had a normal head CT at that time.",
        "type": "test",
        "keywords": [],
        "qId": "trec2014-14"
    },
    {
        "description": "A 36-year-old woman presents to the emergency department with 12 weeks of amenorrhea, vaginal spotting that has increased since yesterday, lower abdominal tenderness, nausea and vomiting. The physical exam reveals overall tender abdomen, 18-week sized uterus, and cervical dilation of 2 cm. The complete blood count and biochemical profile are normal. Point of care pregnancy test with cut-off sensitivity of 25 mIU/ml Beta-HCG is negative. The ultrasound reports enlarged uterus (12 cm x 9 cm x 7 cms) with multiple cystic areas in the interior. The differential diagnosis includes vesicular mole vs fibroid degeneration.",
        "type": "test",
        "keywords": [],
        "qId": "trec2014-15"
    },
    {
        "description": "A 28-year-old female with neck and shoulder pain and left hand and arm paresthesias three weeks after returning from a trip to California where she attended a stray animal recovery campaign. Her physical exam was unremarkable except for slight tremors and almost imperceptible spasticity. She was prescribed NSAIDS and a topical muscle relaxant. She was brought in to the ER three days later with spastic arm movements, sweating, increasing agitation and anxiety, malaise, difficultly swallowing and marked hydrophobia, and was immediately hospitalized.",
        "type": "test",
        "keywords": [],
        "qId": "trec2014-16"
    },
    {
        "description": "A 48-year-old white male with history of common variable immunodeficiency (CVID) with acute abdominal pain, fever, dehydration, HR of 132 bpm, BP 80/40. The physical examination is remarkable for tenderness and positive Murphy sign. Abdominal ultrasound shows hepatomegaly and abundant free intraperitoneal fluid. Exploratory laparotomy reveals a ruptured liver abscess, which is then surgically drained. After surgery, the patient is taken to the ICU.",
        "type": "test",
        "keywords": [],
        "qId": "trec2014-17"
    },
    {
        "description": "A 6-month-old male infant has a urine output of less than 0.2 mL/kg/hr shortly after undergoing major surgery. On examination, he has generalized edema. His blood pressure is 115/80 mm Hg, his pulse is 141/min, and his respirations are 18/min. His blood urea nitrogen is 33 mg/dL, and his serum creatinine is 1.3 mg/dL. Initial urinalysis shows specific gravity of 1.017. Microscopic examination of the urine sample reveals 1 WBC per high-power field (HPF), 18 RBCs per HPF, and 5 granular casts per HPF. His fractional excretion of sodium is 3.3%.",
        "type": "test",
        "keywords": [],
        "qId": "trec2014-18"
    },
    {
        "description": "A 52-year-old African American man with a history of heavy smoking and drinking, describes progressive dysphagia that began several months ago. He first noticed difficulty swallowing meat. His trouble swallowing then progressed to include other solid foods, soft foods, and then liquids. He is able to locate the point where food is obstructed at the lower end of his sternum. He has lost a total of 25 pounds.",
        "type": "test",
        "keywords": [],
        "qId": "trec2014-19"
    },
    {
        "description": "A 32-year-old woman is admitted to the ER following a car accident. She has sustained multiple injuries including upper and lower extremity fractures. She is fully awake and alert, and she reports that she was not wearing a seat belt. Her blood pressure is 134/74 mm Hg, and her pulse is 87/min. Physical examination reveals a tender abdomen with guarding and rebound in all four quadrants. She has no bowel sounds.",
        "type": "test",
        "keywords": [],
        "qId": "trec2014-20"
    },
    {
        "description": "A 21-year-old female is evaluated for progressive arthralgias and malaise. On examination she is found to have alopecia, a rash mainly distributed on the bridge of her nose and her cheeks, a delicate non-palpable purpura on her calves, and swelling and tenderness of her wrists and ankles. Her lab shows normocytic anemia, thrombocytopenia, a 4/4 positive ANA and anti-dsDNA. Her urine is positive for protein and RBC casts.",
        "type": "treatment",
        "keywords": [],
        "qId": "trec2014-21"
    },
    {
        "description": "A 15-year-old girl presents to the ER with abdominal pain. The pain appeared gradually and was periumbilical at first, localizing to the right lower quadrant over hours. She has had no appetite since yesterday but denies diarrhea. She has had no sexual partners and her menses are regular. On examination, she has localized rebound tenderness over the right lower quadrant. On an abdominal ultrasound, a markedly edematous appendix is seen.",
        "type": "treatment",
        "keywords": [],
        "qId": "trec2014-22"
    },
    {
        "description": "A 63-year-old man presents with cough and shortness of breath. His past medical history is notable for heavy smoking, spinal stenosis, diabetes, hypothyroidism and mild psoriasis. He also has a family history of early onset dementia. His symptoms began about a week prior to his admission, with productive cough, purulent sputum and difficulty breathing, requiring him to use his home oxygen for the past 24 hours. He denies fever. On examination he is cyanotic, tachypneic, with a barrel shaped chest and diffuse rales over his lungs. A chest x-ray is notable for hyperinflation with no consolidation.",
        "type": "treatment",
        "keywords": [],
        "qId": "trec2014-23"
    },
    {
        "description": "A 33-year-old male athlete presented to the ER with acute abdominal pain. Family member says the patient fell off his bike a week earlier and suffered blunt trauma to the left hemi-abdomen, and he has had mild abdominal pain since that day. The patient's history is negative for smoking, drugs, and alcohol. BP: 60/30 mmHg, HR: 140/min. The patient is pale, the physical examination of the abdomen revealed muscle contraction and resistance. Emergency ultrasound and CT scan of the abdomen reveal extended intraperitoneal hemorrhage due to spleen rupture.",
        "type": "treatment",
        "keywords": [],
        "qId": "trec2014-24"
    },
    {
        "description": "An 8-year-old boy fell from his bike striking his left temple on the pavement. There was no immediate loss of consciousness, and a brief examination at the scene noted his pupils were symmetrical, reactive to the light, and he was moving all four limbs. Half an hour after the fall the child became drowsy, pale, and vomited. He was transferred to the emergency department. Upon arrival the heart rate was 52/min, blood pressure of 155/98. The Glasgow Coma Scale (GCS) was 6/15, the pupils were asymmetrical and movement of the right upper and lower extremities was impaired. The neurosurgical team advised deferring the CT scan in favor of initiating immediate treatment.",
        "type": "treatment",
        "keywords": [],
        "qId": "trec2014-25"
    },
    {
        "description": "A group of 14 humanitarian service workers is preparing a trip to the Amazon Rainforest region in Brazil. All the members of the group have traveled on multiple occasions and have up-to-date vaccine certificates. Malaria Chemoprophylaxis is indicated but three of the women are in different stages of pregnancy.",
        "type": "treatment",
        "keywords": [],
        "qId": "trec2014-26"
    },
    {
        "description": "A 21-year-old college student undergoes colonoscopy due to family history of multiple polyps in his older siblings. His brother underwent total proctocolectomy at age 22, and his sister underwent a total proctocolectomy at age 28, after both were found to have hundreds of colonic adenomas on colonoscopy. Both siblings are currently well without any findings of neoplasms. The patient undergoes sigmoidoscopy and is found to have dozens of small colonic polyps within rectosigmoid. Several of these are biopsied and are all benign adenomas.",
        "type": "treatment",
        "keywords": [],
        "qId": "trec2014-27"
    },
    {
        "description": "A 31-year-old woman is seen in clinic with amenorrhea. She had menarche at age 14 and has had normal periods since then. However, her last menstrual period was 7 months ago. She also complains of an occasional milky nipple discharge. She is currently taking no mediations and would like to become pregnant soon. Examination shows a whitish nipple discharge bilaterally, but the rest of the examination is normal. Urine human chorionic gonadotropin (hCG) is negative, thyroid stimulating hormone (TSH) is normal, but prolactin is elevated.",
        "type": "treatment",
        "keywords": [],
        "qId": "trec2014-28"
    },
    {
        "description": "A 51-year-old woman is seen in clinic for advice on osteoporosis. She has a past medical history of significant hypertension and diet-controlled diabetes mellitus. She currently smokes 1 pack of cigarettes per day. She was documented by previous LH and FSH levels to be in menopause within the last year. She is concerned about breaking her hip as she gets older and is seeking advice on osteoporosis prevention.",
        "type": "treatment",
        "keywords": [],
        "qId": "trec2014-29"
    },
    {
        "description": "A 72-year-old man complains of increasing calf pain when walking uphill. The symptoms have gradually increased over the past 3 months. The patient had an uncomplicated myocardial infarction 2 years earlier and a transient ischemic attack 6 months ago. Over the past month, his blood pressure has worsened despite previous control with diltiazem, hydrochlorothiazide, and propranolol. His is currently taking isosorbide dinitrate, hydrochlorothiazide, and aspirin. On physical examination, his blood pressure is 151/91 mm Hg, and his pulse is 67/min. There is a right carotid bruit. His lower extremities are slightly cool to the touch and have diminished pulses at the dorsalis pedis.",
        "type": "treatment",
        "keywords": [],
        "qId": "trec2014-30"
    },
    {
        "description": "A 44 yo male is brought to the emergency room after multiple bouts of vomiting that has a \"coffee ground\" appearance. His heart rate is 135 bpm and blood pressure is 70/40 mmHg. Physical exam findings include decreased mental status and cool extremities. He receives a rapid infusion of crystalloid solution followed by packed red blood cell transfusion and is admitted to the ICU for further care.",
        "type": "diagnosis",
        "keywords": [],
        "qId": "trec2015-1"
    },
    {
        "description": "A 62 yo male presents with four days of non-productive cough and one day of fever. He is on immunosuppressive medications, including prednisone. He is admitted to the hospital, and his work-up includes bronchoscopy with bronchoalveolar lavage (BAL). BAL fluid examination reveals owl's eye inclusion bodies in the nuclei of infection cells.",
        "type": "diagnosis",
        "keywords": [],
        "qId": "trec2015-2"
    },
    {
        "description": "A 65 yo male with no significant history of cardiovascular disease presents to the emergency room with acute onset of shortness of breath, tachypnea, and left-sided chest pain that worsens with inspiration. Of note, he underwent a right total hip replacement two weeks prior to presentation and  was unable to begin physical therapy and rehabilitation for several days following the surgery due to poor pain management. Relevant physical exam findings include a respiratory rate of 35 and right calf pain.",
        "type": "diagnosis",
        "keywords": [],
        "qId": "trec2015-3"
    },
    {
        "description": "An 82-year-old woman comes to the emergency department because of chest pain and shortness of breath after being awakened in the morning by stabbing substernal chest pain radiating to the left shoulder and jaw. The patient had hypertension, renal-artery stenosis with chronic renal insufficiency, hypercholesterolemia, osteoporosis and dementia. Blood pressure was 199/108 mm Hg, respiratory rate 18 bpm, oxygen saturation 98% on ambient air. The heart sounds were rapid and with no murmurs. CK-MB was 10.9 ng/ml, CK was 89 U/l, CK index was 12.2% and Troponin T was 0.40 ng/ml. An EKG showed sinus regular tachycardia of 119 bpm, with ST-segment elevations up to 3 mm in V1, V2, and V3. A chest radiograph showed low lung volumes and right basilar subsegmental atelectasis. Coronary angiography showed no stenosis or clinically significant disease. Left ventriculography revealed akinesis of the anterior wall, hypokinesis of the apical and distal inferior walls, and compensatory hyperkinesis of the basal anterior and basal inferior walls. A transthoracic echocardiogram showed severe segmental left ventricular dysfunction involving the septum, anteroseptal territory, and apex. The overall left ventricular systolic function was mildly impaired and there was mild mitral regurgitation.",
        "type": "diagnosis",
        "keywords": [],
        "qId": "trec2015-4"
    },
    {
        "description": "A 31-year-old woman with no previous medical problems comes to the emergency room with a history of 2 weeks of joint pain and fatigue. Initially she had right ankle swelling and difficulty standing up and walking, all of which resolved after a few days. For the past several days she has had pain, swelling and stiffness in her knees, hips and right elbow. She also reports intermittent fevers ranging from 38.2 to 39.4 degrees Celsius and chest pain.",
        "type": "diagnosis",
        "keywords": [],
        "qId": "trec2015-5"
    },
    {
        "description": "A 46-year-old woman presents  with a 9 month history of weight loss (20 lb), sweating, insomnia and diarrhea. She reports to have been eating more than normal and that her heart sometimes races for no reason. On physical examination her hands are warm and sweaty, her pulse is irregular at 110bpm and there is hyperreflexia and mild exophthalmia.",
        "type": "diagnosis",
        "keywords": [],
        "qId": "trec2015-6"
    },
    {
        "description": "A 20 yo female college student with no significant past medical history presents with a chief complaint of fatigue. She reports increased sleep and appetite over the past few months as well as difficulty concentrating on her schoolwork. She no longer enjoys spending time with her friends and feels guilty for not spending more time with her family. Her physical exam and laboratory tests, including hemoglobin, hematocrit and thyroid stimulating hormone, are within normal limits.",
        "type": "diagnosis",
        "keywords": [],
        "qId": "trec2015-7"
    },
    {
        "description": "A 10 yo boy with nighttime snoring, pauses in breathing, and restlessness with nighttime awakenings. No history of headache or night terrors. The boy's teacher recently contacted his parents because she was concerned about his declining grades, lack of attention, and excessive sleepiness during class.",
        "type": "diagnosis",
        "keywords": [],
        "qId": "trec2015-8"
    },
    {
        "description": "A 10 year old child is brought to the emergency room complaining of myalgia, cough, and shortness of breath.  Two weeks ago the patient was seen by his pediatrician for low-grade fever, abdominal pain, and diarrhea, diagnosed with a viral illness, and prescribed OTC medications. Three weeks ago the family returned home after a stay with relatives on a farm that raises domestic pigs for consumption. Vital signs: T: 39.5 C, BP: 90/60 HR: 120/min RR: 40/min. Physical exam findings include cyanosis,  slight stiffness of the neck,  and  marked periorbital edema. Lab results include WBC 25,000, with 25% Eosinophils, and an unremarkable urinalysis.",
        "type": "diagnosis",
        "keywords": [],
        "qId": "trec2015-9"
    },
    {
        "description": "A 38 year old woman complains of severe premenstrual and menstrual pelvic pain, heavy, irregular periods and occasional spotting between periods. Past medical history remarkable for  two years of infertility treatment and an ectopic pregnancy at age 26.",
        "type": "diagnosis",
        "keywords": [],
        "qId": "trec2015-10"
    },
    {
        "description": "A 56-year old Caucasian female complains of being markedly more sensitive to the cold than most people. She also gets tired easily, has decreased appetite, and has recently tried home remedies for her constipation. Physical examination reveals hyporeflexia with delayed relaxation of knee and ankle reflexes, and very dry skin. She moves and talks slowly.",
        "type": "test",
        "keywords": [],
        "qId": "trec2015-11"
    },
    {
        "description": "A 44-year-old man was recently in an automobile accident where he sustained a skull fracture. In the emergency room, he noted clear fluid dripping from his nose. The following day he started complaining of severe headache and fever. Nuchal rigidity was found on physical examination.",
        "type": "test",
        "keywords": [],
        "qId": "trec2015-12"
    },
    {
        "description": "A 5-year-old boy presents to the emergency department with complaints of progressively worsening dysphagia, drooling, fever and vocal changes. He is toxic-appearing, and leans forward while sitting on his mother's lap. He is drooling and speaks with a muffled \"hot potato\" voice. The parents deny the possibility of foreign body ingestion or trauma, and they report that they are delaying some of his vaccines.",
        "type": "test",
        "keywords": [],
        "qId": "trec2015-13"
    },
    {
        "description": "A 27-year-old woman at 11 weeks gestation in her second pregnancy is found to have a hemoglobin (Hb) of 9.0 g/dL, white blood cell count 6.3 x 109/L, platelet count 119 x 109/L, mean corpuscular volume 109 fL. Further investigations reveal mild iron deficiency. She already receives iron supplementation. The obstetrician repeats the complete blood cell count 2 weeks later. The Hb is 8.9 g/dL, WBC count 7.1 x 109/L, and platelets 108 x 109/L. She describes difficulty swallowing. A reticulocyte count is performed and found elevated at 180 x 109/L. The obstetrician requests a hematology consult. The following additional results were found: Negative DAT, normal clotting screen, elevated LDH (2000 IU/L), normal urea and electrolytes, normal alanine aminotransferase (ALT), anisocytosis, poikilocytosis, no fragments, no agglutination, polychromasia and presence of hemosiderin in the urine.",
        "type": "test",
        "keywords": [],
        "qId": "trec2015-14"
    },
    {
        "description": "Karen is a 72-year-old woman with hypertension and type 2 diabetes, who was hospitalized for cryptogenic stroke two weeks ago. At the time, computed tomography was negative for brain hemorrhage and she was given thrombolytic therapy with resolution of her symptoms. Transesophageal echocardiogram and magnetic resonance angiogram of brain and great vessels found no evidence of abnormalities. She presents currently with a blood pressure of 120/70 mm Hg, normal glucose, and normal sinus rhythm on a 12-lead electrocardiogram. She reports history of occasional palpitations, shortness of breath and chest pain lasting for a few minutes and then stopping on their own.",
        "type": "test",
        "keywords": [],
        "qId": "trec2015-15"
    },
    {
        "description": "A 4 year old boy presents to the emergency room with wheezing. He has had a history of allergic rhinitis, but no history of wheezing. His mother reports that 5 hours ago patient was playing in the backyard sandbox when she heard him suddenly start coughing. The coughing lasted only moments, but he has been audibly wheezing since. Mother was concerned, because his breathing has not returned to normal, so she brought him to the ED. On exam, the child is playful and well appearing. Wheezing is heard in the mid-right chest area. O2 sats are 100% on room air.",
        "type": "test",
        "keywords": [],
        "qId": "trec2015-16"
    },
    {
        "description": "A 32 year old female with no previous medical history presents to clinic to discuss lab results from her most recent pap smear. She reports no complaints and is in general good health. The results of her PAP were cytology negative, HPV positive.",
        "type": "test",
        "keywords": [],
        "qId": "trec2015-17"
    },
    {
        "description": "A 65 yo African-American male with shortness of breath related to exertion that has been worsening over the past three weeks. He also has difficulty breathing when lying flat and has started using two to three extra pillows at night. Significant physical exam findings include bibasilar lung crackles, pitting ankle edema and jugular venous distension.",
        "type": "test",
        "keywords": [],
        "qId": "trec2015-18"
    },
    {
        "description": "A 66yo female with significant smoking history and chronic cough for the past two years presents with recent, progressive shortness of breath. She is in moderate respiratory distress after walking from the waiting room to the examination room. Physical exam reveals mildly distended neck veins, a barrel-shaped chest, and moderate inspiratory and expiratory wheezes. She has smoked 1 to 2 packs per days for the past 47 years.",
        "type": "test",
        "keywords": [],
        "qId": "trec2015-19"
    },
    {
        "description": "An 89-year-old man was brought to the emergency department by his wife and son after six months of progressive changes in cognition and personality. He began to have poor memory, difficulty expressing himself, and exhibited unusual behaviors, such as pouring milk onto the table and undressing immediately after getting dressed. He is unable to dress, bathe, use the toilet, or walk independently. On examination the patient's temperature was 36.5°C (97.7°F), the heart rate 61 bpm in an irregular rhythm, the blood pressure 144/78 mm Hg, and the respiratory rate 18 bpm. The patient was alert and oriented to self and city but not year. He frequently interrupted the examiner. He repeatedly reached out to grab things in front of him, including the examiner's tie and face. He could not spell the word \"world\" backward, could not follow commands involving multiple steps and was unable to perform simple calculations. His speech was fluent, but he often used similar-sounding word substitutions. He could immediately recall three out of three words but recalled none of them after 5 minutes. Examination of the cranial nerves revealed clinically significant paratonic rigidity. Myoclonic jerks were seen in the arms, with symmetrically brisk reflexes. The reflexes in the legs were normal.",
        "type": "test",
        "keywords": [],
        "qId": "trec2015-20"
    },
    {
        "description": "A 32-year-old male presents to your office complaining of diarrhea, abdominal cramping and flatulence. Stools are greasy and foul-smelling. He also has loss of appetite and malaise. He recently returned home from a hiking trip in the mountains where he drank water from natural sources.  An iodine-stained stool smear revealed ellipsoidal cysts with smooth, well-defined walls and 2+ nuclei.",
        "type": "treatment",
        "keywords": [],
        "qId": "trec2015-21"
    },
    {
        "description": "A 65-year-old male with a history of tuberculosis has started to complain of productive cough with tinges of blood. Chest X-ray reveals a round opaque mass within a cavity in his left upper lobe. The spherical mass moved in the cavity during supine and prone CT imaging. Culture of the sputum revealed an organism with septated, low-angle branching hyphae that had straight, parallel walls.",
        "type": "treatment",
        "keywords": [],
        "qId": "trec2015-22"
    },
    {
        "description": "An 18-year-old male returning from a recent vacation in Asia presents to the ER with a sudden onset of high fever, chills, facial flushing, epistaxis and severe headache and joint pain. His complete blood count reveals leukopenia, increased hematocrit concentration and thrombocytopenia.",
        "type": "treatment",
        "keywords": [],
        "qId": "trec2015-23"
    },
    {
        "description": "A 31 yo male with no significant past medical history presents with productive cough and chest pain. He reports developing cold symptoms one week ago that were improving until two days ago, when he developed a new fever, chills, and worsening cough. He has right-sided chest pain that is aggravated by coughing. His wife also had cold symptoms a week ago but is now feeling well. Vitals signs include temperature 103.4, pulse 105, blood pressure 120/80, and respiratory rate 15. Lung exam reveals expiratory wheezing, decreased breath sounds, and egophany in the left lower lung field.",
        "type": "treatment",
        "keywords": [],
        "qId": "trec2015-24"
    },
    {
        "description": "A 10-year-old boy comes to the emergency department for evaluation of right knee pain. The child's guardians stated that he had been complaining of knee pain for the past 4 days and it had been getting progressively worse. There was no history of trauma. The day before the visit the boy developed a fever, and over the past day he has become increasingly lethargic. On physical examination blood pressure was 117/75 mm Hg,  HR 138 bpm, temperature 38.1 C (100.5 F), respiration 28 bpm, oxygen saturation 97%. There was edema and tenderness of the right thigh and knee, as well as effusion and extremely limited range of motion. Sensation and motor tone were normal. Plain radiography and CT showed an osteolytic lesion.",
        "type": "treatment",
        "keywords": [],
        "qId": "trec2015-25"
    },
    {
        "description": "A 28 yo female G1P0A0 is admitted to the Ob/Gyn service for non-ruptured ectopic pregnancy. Past medical history is remarkable for obesity, a non-complicated appendectomy at age 8, infertility treatment for the past 3 years, and pelvic laparoscopy during which minor right Fallopian tube adhesions were cauterized. Her LMP was 8 weeks prior to admission. Beta HCG is 100 mIU. The attending physician usually treats unruptured ecoptic pregnancies laparoscopically but is concerned about the patient's obesity and history of adhesions.",
        "type": "treatment",
        "keywords": [],
        "qId": "trec2015-26"
    },
    {
        "description": "A 15 yo girl accompanied by her mother is referred for evaluation by the school. The girl has more than expected absences in the last three month, appears to be constantly tired and sleepy in class. Her mother assures the girl is well fed, and getting the proper sleep at night but admits the girls tires easily when they go out on weekend hikes. Physical examination: BP: 90/60. HR 130/min the only remarkable findings are extremely pale skin and mucosae. Grade 3/6 systolic murmur. Lab tests report Hb: 4.2 g/dL, MCV 61.8 fL, serum iron < 1.8 umol/L and ferritin of 2 ng/mL. Fecal occult blood is negative.",
        "type": "treatment",
        "keywords": [],
        "qId": "trec2015-27"
    },
    {
        "description": "A previously healthy 8-year-old boy presents with a complaint of right lower extremity pain and fever. He reports limping for the past two days. The parents report no previous trauma, but do remember a tick bite during a summer visit to Maryland several months ago. They do not remember observing erythema migrans. On examination, the right knee is tender and swollen. Peripheral WBC count and SRP are slightly elevated.",
        "type": "treatment",
        "keywords": [],
        "qId": "trec2015-28"
    },
    {
        "description": "A 4-year-old girl presents with persistent fever for the past week. The parents report a spike at 104°F. The parents brought the child to the emergency room when they noticed erythematous rash on the girl's trunk. Physical examination reveals strawberry red tongue, red and cracked lips, and swollen red hands. The whites of both eyes are red with no discharge.",
        "type": "treatment",
        "keywords": [],
        "qId": "trec2015-29"
    },
    {
        "description": "A 47 year old male who fell on his outstretched left arm presents with pain and bruising on the inside and outside of the elbow, swelling, and inability to bend the arm. On the x-ray, the ulna has dislocated posteriorly from the trochlea of the humerus. The radius has dislocated from the capitulum of the humerus.",
        "type": "treatment",
        "keywords": [],
        "qId": "trec2015-30"
    }
]

	
})();
