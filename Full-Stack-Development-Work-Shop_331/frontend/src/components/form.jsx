// import npm.axios from "axios";
import { useForm } from "react-hook-form";

function Form() {

    // useForm() helps us manage the form
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    // This function runs when the form is submitted
    const onSubmit = (data) => {
        console.log(data);
        alert("Form submitted successfully!");
    };

    return (
        <div>

            <h1>Student Registration Form</h1>

            {/* Form starts here */}
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* Name */}
                <label>Name:</label>

                <input
                    type="text"
                    placeholder="Enter your name"
                    {...register("name", {
                        required: "Name is required"
                    })}
                />

                {/* Show error if name is empty */}
                {errors.name && (
                    <p>{errors.name.message}</p>
                )}

                <br /><br />


                {/* Email */}
                <label>Email:</label>

                <input
                    type="email"
                    placeholder="Enter your email"
                    {...register("email", {
                        required: "Email is required"
                    })}
                />

                {/* Show error if email is empty */}
                {errors.email && (
                    <p>{errors.email.message}</p>
                )}

                <br /><br />


                {/* Password */}
                <label>Password:</label>

                <input
                    type="password"
                    placeholder="Enter password"
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 6,
                            message: "Password must contain at least 6 characters"
                        }
                    })}
                />

                {/* Show password error */}
                {errors.password && (
                    <p>{errors.password.message}</p>
                )}

                <br /><br />


                {/* Age */}
                <label>Age:</label>

                <input
                    type="number"
                    placeholder="Enter your age"
                    {...register("age", {
                        required: "Age is required",
                        min: {
                            value: 18,
                            message: "Age must be 18 or above"
                        }
                    })}
                />

                {/* Show age error */}
                {errors.age && (
                    <p>{errors.age.message}</p>
                )}

                <br /><br />


                {/* Gender */}
                <label>Gender:</label>

                <select
                    {...register("gender", {
                        required: "Please select your gender"
                    })}
                >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>

                {/* Show gender error */}
                {errors.gender && (
                    <p>{errors.gender.message}</p>
                )}

                <br /><br />


                {/* Course */}
                <label>Course:</label>

                <select
                    {...register("course", {
                        required: "Please select your course"
                    })}
                >
                    <option value="">Select Course</option>
                    <option value="CSE">CSE</option>
                    <option value="IT">IT</option>
                    <option value="ECE">ECE</option>
                    <option value="Mechanical">Mechanical</option>
                </select>

                {/* Show course error */}
                {errors.course && (
                    <p>{errors.course.message}</p>
                )}

                <br /><br />


                {/* Phone */}
                <label>Phone:</label>

                <input
                    type="tel"
                    placeholder="Enter phone number"
                    {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Enter a valid 10-digit phone number"
                        }
                    })}
                />

                {/* Show phone error */}
                {errors.phone && (
                    <p>{errors.phone.message}</p>
                )}

                <br /><br />


                {/* Submit button */}
                <button type="submit">
                    Submit
                </button>

            </form>

        </div>
    );
}

export default Form;