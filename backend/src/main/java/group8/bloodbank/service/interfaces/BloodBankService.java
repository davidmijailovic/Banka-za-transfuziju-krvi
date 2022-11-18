package group8.bloodbank.service.interfaces;

import group8.bloodbank.model.BloodBank;
import group8.bloodbank.model.BloodType;

import java.awt.print.Pageable;
import java.util.List;
import java.util.Optional;

public interface BloodBankService {

    public List<BloodBank> getAll();
    public Optional<BloodBank> getById(Long id);
    public boolean getAmountOfBloodForType(BloodType type, Long id);
    public void setApiKey(String apiKey, Long id);
    public BloodBank getByApiKey(String apiKey);
    public boolean CheckBloodAmount (BloodType type, double quant, Long id);
    BloodBank saveBloodBank(BloodBank bloodBank);
    public List<BloodBank> findAllByName(Pageable pageable);


    String getApiKeyById(Long id);
}
