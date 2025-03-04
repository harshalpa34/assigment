import React from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDataContext } from "../store/contextDataStore";

// Define Zod schema
const schema = z.object({
  receiverName: z.string().min(1, "Receiver name is required"),
  weight: z.number().min(0.1, "Weight must be greater than 0"),
  boxColour: z.string().min(1, "Box colour is required"),
  destinationCountry: z.enum(["Sweden", "China", "Brazil", "Australia"], {
    errorMap: () => ({ message: "Please select a destination" }),
  }),
});

const Form = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const { addCapturedData } = useDataContext();

  const onSubmit = (data) => {
    addCapturedData(data);
    reset();
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="receiverName">Receiver Name</label>
          <Controller
            name="receiverName"
            control={control}
            render={({ field }) => <input {...field} />}
          />
          {errors.receiverName && <p>{errors.receiverName.message}</p>}
        </div>

        <div>
          <label htmlFor="weight">Weight (kg)</label>
          <Controller
            name="weight"
            control={control}
            render={({ field }) => (
              <input
                type="number"
                {...field}
                onChange={(e) => field.onChange(parseInt(e.target.value))}
              />
            )}
          />
          {errors.weight && <p>{errors.weight.message}</p>}
        </div>

        <div>
          <label htmlFor="boxColour">Box Colour (RGB)</label>
          <Controller
            name="boxColour"
            control={control}
            render={({ field }) => <input type="color" {...field} />}
          />
          {errors.boxColour && <p>{errors.boxColour.message}</p>}
        </div>

        <div>
          <label htmlFor="destinationCountry">Destination Country</label>
          <Controller
            name="destinationCountry"
            control={control}
            render={({ field }) => (
              <select {...field}>
                <option value="Sweden">Sweden</option>
                <option value="China">China</option>
                <option value="Brazil">Brazil</option>
                <option value="Australia">Australia</option>
              </select>
            )}
          />
          {errors.destinationCountry && (
            <p>{errors.destinationCountry.message}</p>
          )}
        </div>

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Form;
