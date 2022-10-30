package group8.bloodbank.repository;

import group8.bloodbank.model.BloodBank;
import group8.bloodbank.model.BloodType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

public interface BloodBankRepository extends JpaRepository<BloodBank, Long> {

    @Query("SELECT value(m) FROM BloodBank b join b.bloodType m" +
            " where key(m) = ?1 and b.id = ?2 and value(m) >= ?3")
    public Optional<Double> getAmountOfBloodForType(BloodType type, int id);

    @Transactional
    @Modifying(clearAutomatically = true)
    @Query("update BloodBank b set b.api=:apiKey where b.id=:id")
    public void setApiKey(@Param("apiKey") String apiKey,@Param("id") Long id);
}
