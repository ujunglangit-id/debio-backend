const substrateTypes = {
  "AccountInfo": "AccountInfoWithDualRefCount",
  "Address": "MultiAddress",
  "LookupSource": "MultiAddress",
  "AccountIdOf": "AccountId",
  "EthereumAddress": "[u8; 20]",
  "EthereumAddressOf": "EthereumAddress",
  "HashOf": "H256",
  "Moment": "u64",
  "CountryRegionCode": "Text",
  "CityCode": "Text",
  "LabInfo": {
    "box_public_key": "H256",
    "name": "Text",
    "email": "Text",
    "country": "Text",
    "region": "Text",
    "city": "Text",
    "address": "Text",
    "latitude": "Option<Text>",
    "longitude": "Option<Text>",
    "profile_image": "Option<Text>"
  },
  "Lab": {
    "account_id": "AccountId",
    "services": "Vec<H256>",
    "certifications": "Vec<H256>",
    "info": "LabInfo"
  },
  "LabOf": "Lab",
  "ServiceInfo": {
    "name": "Text",
    "price": "u128",
    "category": "Text",
    "description": "Text",
    "long_description": "Option<Text>",
    "image": "Option<Text>"
  },
  "Service": {
    "id": "H256",
    "owner_id": "AccountId",
    "info": "ServiceInfo"
  },
  "ServiceOf": "Service",
  "ServiceInfoOf": "ServiceInfo",
  "ServiceIdOf": "H256",
  "CertificationInfo": {
    "title": "Text",
    "issuer": "Text",
    "month": "Text",
    "year": "Text",
    "description": "Text"
  },
  "Certification": {
    "id": "H256",
    "owner_id": "AccountId",
    "info": "CertificationInfo"
  },
  "CertificationOf": "Certification",
  "CertificationInfoOf": "CertificationInfo",
  "CertificationIdOf": "H256",
  "OrderStatus": {
    "_enum": [
      "Unpaid",
      "Paid",
      "Success",
      "Refunded",
      "Cancelled"
    ]
  },
  "MomentOf": "Moment",
  "Order": {
    "id": "H256",
    "service_id": "H256",
    "customer_id": "AccountId",
    "customer_box_public_key": "H256",
    "seller_id": "AccountId",
    "dna_sample_tracking_id": "Text",
    "price": "u128",
    "status": "OrderStatus",
    "created_at": "u64",
    "updated_at": "u64"
  },
  "OrderOf": "Order",
  "OrderIdsOf": "Vec<H256>",
  "DnaSampleStatus": {
    "_enum": [
      "Sending",
      "Received",
      "Rejected",
      "Processing",
      "Success",
      "Failed"
    ]
  },
  "DnaSampleTrackingId": "Text",
  "DnaSample": {
    "tracking_id": "Text",
    "lab_id": "AccountId",
    "owner_id": "AccountId",
    "status": "DnaSampleStatus",
    "order_id": "H256",
    "rejected_title": "Option<Text>",
    "rejected_description": "Option<Text>",
    "created_at": "Moment",
    "updated_at": "Moment"
  },
  "DnaSampleOf": "DnaSample",
  "DnaTestResult": {
    "tracking_id": "Text",
    "lab_id": "Option<AccountId>",
    "owner_id": "AccountId",
    "comments": "Option<Text>",
    "result_link": "Option<Text>",
    "report_link": "Option<Text>",
    "order_id": "Option<H256>",
    "created_at": "Moment",
    "updated_at": "Moment"
  },
  "DnaTestResultOf": "DnaTestResult",
  "DnaTestResultSubmission": {
    "comments": "Option<Text>",
    "result_link": "Option<Text>",
    "report_link": "Option<Text>"
  },
  "Escrow": {
    "account_id": "AccountId",
    "order_id": "H256",
    "amount_to_pay": "u128",
    "amount_paid": "u128",
    "expires_at": "u64"
  },
  "EscrowOf": "Escrow",
  "Role": {
    "_enum": [
      "Customer",
      "Lab",
      "Hospital",
      "Doctor"
    ]
  },
  "ElectronicMedicalRecordInfo": {
    "id": "H256",
    "owner_id": "AccountId",
    "title": "Text",
    "description": "Text",
    "record_link": "Text",
    "uploaded_at": "Moment"
  },
  "ElectronicMedicalRecord": {
    "owner_id": "AccountId",
    "info": "Vec<H256>"
  },
  "ElectronicMedicalRecordOf": "ElectronicMedicalRecord",
  "ElectronicMedicalRecordInfoOf": "ElectronicMedicalRecordInfo",
  "ElectronicMedicalRecordInfoIdOf": "H256",
  "DoctorInfo": {
    "name": "Text",
    "email": "Text",
    "country": "Text",
    "region": "Text",
    "city": "Text",
    "address": "Text",
    "latitude": "Option<Text>",
    "longitude": "Option<Text>",
    "profile_image": "Option<Text>"
  },
  "Doctor": {
    "account_id": "AccountId",
    "certifications": "Vec<H256>",
    "info": "DoctorInfo"
  },
  "DoctorOf": "Doctor",
  "DoctorCertificationInfo": {
    "title": "Text",
    "issuer": "Text",
    "month": "Text",
    "year": "Text",
    "description": "Text"
  },
  "DoctorCertification": {
    "id": "H256",
    "owner_id": "AccountId",
    "info": "DoctorCertificationInfo"
  },
  "DoctorCertificationOf": "DoctorCertification",
  "DoctorCertificationInfoOf": "DoctorCertificationInfo",
  "DoctorCertificationIdOf": "H256",
  "HospitalInfo": {
    "name": "Text",
    "email": "Text",
    "country": "Text",
    "region": "Text",
    "city": "Text",
    "address": "Text",
    "latitude": "Option<Text>",
    "longitude": "Option<Text>",
    "profile_image": "Option<Text>"
  },
  "Hospital": {
    "account_id": "AccountId",
    "certifications": "Vec<H256>",
    "info": "HospitalInfo"
  },
  "HospitalOf": "Hospital",
  "HospitalCertificationInfo": {
    "title": "Text",
    "issuer": "Text",
    "month": "Text",
    "year": "Text",
    "description": "Text"
  },
  "HospitalCertification": {
    "id": "H256",
    "owner_id": "AccountId",
    "info": "HospitalCertificationInfo"
  },
  "HospitalCertificationOf": "HospitalCertification",
  "HospitalCertificationInfoOf": "HospitalCertificationInfo",
  "HospitalCertificationIdOf": "H256"
}

export default substrateTypes