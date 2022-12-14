package group8.bloodbank.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Donor extends User {

    @Column
    @OneToMany(fetch = FetchType.LAZY)
    public Set<Complaint> complaint;

    @Column
    @OneToMany(fetch = FetchType.LAZY)
    public Set<Survey> survey;

    @Column
    private int points;
    @Column
    private int penalty;

    @Column
    private Category category;
    @Column
    private BloodType bloodType;


}