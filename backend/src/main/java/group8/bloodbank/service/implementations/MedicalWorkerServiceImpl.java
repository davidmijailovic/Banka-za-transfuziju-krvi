package group8.bloodbank.service.implementations;

import group8.bloodbank.model.MedicalWorker;
import group8.bloodbank.repository.MedicalWorkerRepository;
import group8.bloodbank.service.interfaces.MedicalWorkerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MedicalWorkerServiceImpl implements MedicalWorkerService {

    MedicalWorkerRepository medicalWorkerRepository;

    @Autowired
    public MedicalWorkerServiceImpl(MedicalWorkerRepository repo) {
        this.medicalWorkerRepository = repo;
    }

    @Override
    public MedicalWorker saveMedicalWorker(MedicalWorker medicalWorker) {
        return medicalWorkerRepository.save(medicalWorker);
    }

    @Override
    public List<MedicalWorker> getAll() {
        return medicalWorkerRepository.findAll();
    }
}
