package group8.bloodbank.util;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target({ElementType.METHOD, ElementType.FIELD})    // definise nad cime anotacija moze da se koristi
@Retention(RetentionPolicy.RUNTIME)     // definise politiku zadrzavanja anotacije
@Constraint(validatedBy=CustomConstraintValidator.class)       // povezuje anotaciju sa validatorom
public @interface CustomConstraint {

    String message() default "Field must be unique";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}